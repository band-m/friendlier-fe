import React, { useEffect, useState } from 'react';
import Nouislider from 'nouislider-react';
import '../Slider/Slider.css';
import add from 'date-fns/add';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInCalendarDays';
import styles from './ContactDetail/DetailForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { myAction, postContactDetails } from '../../data/actions/contact-detail-actions';
import {
  SET_USER_ID,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_NOTES,
  SET_BIRTHDATE,
  SET_RED_ZONE,
  SET_YELLOW_ZONE,
  SET_COMM_FREQUENCY,
  SET_EMAIL,
  SET_ADDRESS,
  SET_PHONE_NUMBER,
  SET_DEADLINE_OBJECT,
  SET_NOTIFICATION_RANGE,
  SET_DEADLINE_DATE,
  SET_CONTACT_CREATED_ON,
  SET_DEADLINE_NUMBER,
  SET_DEADLINE_UNIT,
  SET_SLIDER_1,
  SET_SLIDER_2,
  CLEAR_CONTACT_DETAILS
} from '../../data/action-types/action-types';
import { selectUser } from '../../data/selectors/auth-selector';
import { selectContactDetails } from '../../data/selectors/contact-detail-selectors';
import { useHistory } from 'react-router-dom';
import useLoggedOutRedirect from '../../hooks/useLoggedOutRedirect';

export default function AddContact() {
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);
  const [deadlineNumber, setDeadlineNumber] = useState(2);
  const [numOfDays, setNumOfDays] = useState(14);
  const [deadlineUnit, setDeadlineUnit] = useState('weeks');
  const [notificationOption, setNotificationOption] = useState(1);
  const [deadline, setDeadline] = useState();
  const [deadlineObject, setDeadlineObject] = useState({ days: 14, months: 0 });
  const [yellowZone, setYellowZone] = useState();
  const [redZone, setRedZone] = useState();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const details = useSelector(selectContactDetails);
  const history = useHistory();

  useLoggedOutRedirect();

  useEffect(() => {
    dispatch(myAction(CLEAR_CONTACT_DETAILS));
  }, []);

  useEffect(() => {
    if(user) {
      dispatch(myAction(SET_USER_ID, user._id));
      dispatch(myAction(SET_CONTACT_CREATED_ON, new Date()));
    }
  }, [user]);

  // When user moves a slider, set slider
  const update = (handle, value) => {
    if(handle === 0) {
      setSlider1(Math.floor(value[0]));
    } else {
      setSlider2(Math.floor(value[1]));
    }
  };

  // When user inputs a number, change deadlineNumber and numOfDays
  const changeNumOfDaysInput = value => {
    setDeadlineNumber(value);
    const monthDays = differenceInDays((add(new Date(), { months: value })), new Date());
    switch(deadlineUnit) {
      case 'days':
        return setNumOfDays(value);
      case 'weeks':
        return setNumOfDays(value * 7);
      case 'months':
        return setNumOfDays(monthDays);
    }
  };

  // When user selects a days/weeks/months radio, change deadlineUnit and numOfDays
  const changeNumOfDaysRadio = target => {
    setDeadlineUnit(target.id);
    const monthDays = differenceInDays((add(new Date(), { months: deadlineNumber })), new Date());
    switch(target.id) {
      case 'days':
        return setNumOfDays(deadlineNumber);
      case 'weeks':
        return setNumOfDays(deadlineNumber * 7);
      case 'months':
        return setNumOfDays(monthDays);
    }
  };

  // When numOfDays changes, make new deadlineObject and set commFrequency in contact details
  useEffect(() => {
    dispatch(myAction(SET_COMM_FREQUENCY, numOfDays));
    switch(deadlineUnit) {
      case 'days':
        return setDeadlineObject({ days: deadlineNumber, months: 0 });
      case 'weeks':
        return setDeadlineObject({ days: deadlineNumber * 7, months: 0 });
      case 'months':
        return setDeadlineObject({ days: 0, months: deadlineNumber });
    }
  }, [numOfDays]);

  // When deadlineObject changes, make new deadline and set deadlineNumber, deadlineUnit, and deadlineObject in contact details
  useEffect(() => {
    dispatch(myAction(SET_DEADLINE_NUMBER, deadlineNumber));
    dispatch(myAction(SET_DEADLINE_UNIT, deadlineUnit));
    dispatch(myAction(SET_DEADLINE_OBJECT, deadlineObject));
    setDeadline(add(new Date(), deadlineObject));
  }, [deadlineObject]);

  // When deadline changes, set deadlineDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_DEADLINE_DATE, deadline));
  }, [deadline]);

  // When notificationOption changes, set notificationRange in contact details
  useEffect(() => {
    dispatch(myAction(SET_NOTIFICATION_RANGE, notificationOption));
  }, [notificationOption]);

  // When notificationObject or numOfDays changes, change slider positions
  useEffect(() => {
    switch(notificationOption) {
      case 1:
        setSlider1(Math.floor(numOfDays / 3));
        setSlider2(Math.floor((2 * numOfDays) / 3));
        return;
      case 2:
        setSlider1(Math.floor(numOfDays / 2));
        setSlider2(Math.floor((3 * numOfDays) / 4));
        return;
      case 3:
        setSlider1(Math.floor((3 * numOfDays) / 4));
        setSlider2(Math.floor((7 * numOfDays) / 8));
        return;
    }
  }, [notificationOption, numOfDays]);

  // When slider positions change, change yellowZone and redZone and set slider1 and slider2 in contact details
  useEffect(() => {
    dispatch(myAction(SET_SLIDER_1, slider1));
    dispatch(myAction(SET_SLIDER_2, slider2));
    setYellowZone(add(new Date(), { days: slider1 }));
    setRedZone(add(new Date(), { days: slider2 }));
  }, [slider1, slider2]);

  // When yellowZone or redZone change, set yellowZoneStartDate and redZoneStartDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_YELLOW_ZONE, yellowZone));
    dispatch(myAction(SET_RED_ZONE, redZone));
  }, [yellowZone, redZone]);

  // below is probably for edit form, not this one.  Keeping in here just in case

  // useEffect(() => {
  //     if (!contact.lastContactedDate) {
  // dispatch(myAction(SET_TOTAL_GREEN_ZONE_DAYS, differenceInCalendarDays(contact.createdOn, contact.yellowZoneStartDate)));
  // dispatch(myAction(SET_TOTAL_YELLOW_ZONE_DAYS, differenceInCalendarDays(contact.createdOn, contact.redZoneStartDate)));
  // dispatch(myAction(SET_TOTAL_RED_ZONE_DAYS, differenceInCalendarDays(contact.createdOn, contact.deadlineDate)));
  //     } else {
  //       dispatch(myAction(SET_TOTAL_GREEN_ZONE_DAYS, differenceInCalendarDays(contact.lastContactedDate, contact.yellowZoneStartDate));
  //     }
  // }, [numOfDays, yellowZone, redZone]);

  // On initial load, add colors to the range connectors
  useEffect(() => {
    const connectors = document.querySelectorAll('.noUi-connect');
    const classes = ['c-1-color', 'c-2-color', 'c-3-color'];
    for(let i = 0; i < connectors.length; i++) {
      connectors[i].classList.add(classes[i]);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(postContactDetails(details));
    history.push('/contacts');
  };

  return (
    <section className={styles.formWrapper}>
      <form className={styles.DetailForm} onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" />
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name" />
        </div>

        <section>
          <div>
            <label htmlFor="email">Email</label>
            <label htmlFor="address">Address</label>
            <label htmlFor="phoneNumber">Phone Number</label>
            <label htmlFor="birthdate">Birthdate</label>
          </div>

          <div>
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_EMAIL, target.value))} id="email" name="email" placeholder="Email address" />
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_ADDRESS, target.value))} id="address" name="address" placeholder="Physical Address" />
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_PHONE_NUMBER, target.value))} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
            {
            /* <input type="text" onChange={({ target }) => dispatch(myAction(SET_IMAGE, target.value))} id="image" name="image" value={image || ''} placeholder="First Name"/> */}
            <input type="date" onChange={({ target }) => dispatch(myAction(SET_BIRTHDATE, target.value))} id="birthdate" name="birthdate" placeholder="Birthdate" />
          </div>
        </section>
        <section className={styles.notes}><label htmlFor="notes">Notes</label>
          <textarea type="text" onChange={({ target }) => dispatch(myAction(SET_NOTES, target.value))} id="notes" name="notes"></textarea>
        </section>
        {
        /* <input type="date" onChange={({ target }) => dispatch(myAction(SET_SPECIAL_DATES, target.value))} id="specialDates" name="specialDates" value={specialDates || ''} placeholder="First Name"/> */}
        <section id='slider' className={styles.ContactFrequencyInput}>
          <div className={styles.Column}><p>How often do you want to be in contact?</p>
            <div>
          Every
              <input type='number' min={1} value={deadlineNumber} onChange={({ target }) => changeNumOfDaysInput(+target.value)} /><br />
              <label htmlFor='days'>Days</label>
              <input type='radio' id='days' name='deadlineUnit' checked={deadlineUnit === 'days'} onChange={({ target }) => changeNumOfDaysRadio(target)} />
              <label htmlFor='weeks'>Weeks</label>
              <input type='radio' id='weeks' name='deadlineUnit' checked={deadlineUnit === 'weeks'} onChange={({ target }) => changeNumOfDaysRadio(target)} />
              <label htmlFor='months'>Months</label>
              <input type='radio' id='months' name='deadlineUnit' checked={deadlineUnit === 'months'} onChange={({ target }) => changeNumOfDaysRadio(target)} /><br /><br /><br />
            </div>

            <div>
              <p>Choose your notification range:</p>
              <label htmlFor={1}>1</label>
              <input type='radio' name='notificationOptions' id={1} checked={notificationOption === 1} onChange={({ target }) => setNotificationOption(+target.id)} />
              <label htmlFor={2}>2</label>
              <input type='radio' name='notificationOptions' id={2} checked={notificationOption === 2} onChange={({ target }) => setNotificationOption(+target.id)} />
              <label htmlFor={3}>3</label>
              <input type='radio' name='notificationOptions' id={3} checked={notificationOption === 3} onChange={({ target }) => setNotificationOption(+target.id)} /><br /><br /><br />
            </div>

            <p>Your connection deadline will be {deadline && format(deadline, 'PPPP', new Date())}</p>
            <p>Your yellow zone will begin on {yellowZone && format(yellowZone, 'PPPP')}</p>
            <p>Your red zone will begin on {redZone && format(redZone, 'PPPP')}</p>
          </div>
        </section>
        <Nouislider style={{ margin: '40px 0' }} onSlide={update} range={{ min: 0, max: numOfDays }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect={[true, true, true]} step={1} pips={{ mode: 'steps', density: 4 }} />

        <button type="submit">Create a contact</button>
      </form>
    </section>
  );
}









// if (!contact.lastContactedDate) {
//   dispatch(myAction(SET_TOTAL_YELLOW_ZONE_DAYS, differenceInCalendarDays(contact.createdOn, contact.yellowZoneStartDate);
// }
// dispatch(myAction(SET_TOTAL_YELLOW_ZONE_DAYS, differenceInCalendarDays(contact.lastContactedDate, contact.yellowZoneStartDate);


// if (!contact.lastContactedDate) {
//   dispatch(myAction(SET_TOTAL_GREEN_ZONE_DAYS, differenceInCalendarDays(contact.createdOn, contact.yellowZoneStartDate);
// }
// dispatch(myAction(SET_TOTAL_GREEN_ZONE_DAYS, differenceInCalendarDays(contact.lastContactedDate, contact.yellowZoneStartDate);
