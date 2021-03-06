import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DetailForm.css';
import Nouislider from 'nouislider-react';
import '../../Slider/Slider.css';
import format from 'date-fns/format';
import { useSelector, useDispatch } from 'react-redux';
import differenceInDays from 'date-fns/differenceInCalendarDays';
import add from 'date-fns/add';
import { myAction, fetchOneContact, editContactDetails } from '../../../data/actions/contact-detail-actions';
import {
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
  SET_DEADLINE_NUMBER,
  SET_DEADLINE_UNIT,
  SET_NOTIFICATION_RANGE,
  SET_DEADLINE_DATE,
  SET_DEADLINE_OBJECT,
  SET_TOTAL_GREEN_ZONE_DAYS,
  SET_TOTAL_YELLOW_ZONE_DAYS,
  SET_TOTAL_RED_ZONE_DAYS,
  SET_SLIDER_1,
  SET_SLIDER_2
} from '../../../data/action-types/action-types';
import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import { useHistory } from 'react-router-dom';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

const DetailForm = ({ match }) => {
  const contact = useSelector(selectContactDetails);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOneContact(match.params.id));
  }, [match.params.id]);

  const { firstName, lastName, email, address, phoneNumber, birthdate, notes, deadlineNumber, deadlineUnit, deadlineObject, connHistory, lastContactedDate, createdOn, commFrequency, notificationRange, deadlineDate, yellowZoneStartDate, redZoneStartDate } = contact;

  const compareDateString = connHistory.length > 0 ? lastContactedDate : createdOn;
  const compareDate = new Date(compareDateString);
  const yellowZoneNumber = differenceInDays(new Date(yellowZoneStartDate), compareDate);
  const redZoneNumber = differenceInDays(new Date(redZoneStartDate), compareDate);

  const [slider1, setSlider1] = useState(yellowZoneNumber);
  const [slider2, setSlider2] = useState(redZoneNumber);

  // When user inputs a number, set deadlineNumber and commFrequency in contact details
  const changeNumOfDaysInput = value => {
    dispatch(myAction(SET_DEADLINE_NUMBER, value));
    const monthDays = differenceInDays((add(compareDate, { months: value })), compareDate);
    switch(deadlineUnit) {
      case 'days':
        return dispatch(myAction(SET_COMM_FREQUENCY, value));
      case 'weeks':
        return dispatch(myAction(SET_COMM_FREQUENCY, value * 7));
      case 'months':
        return dispatch(myAction(SET_COMM_FREQUENCY, monthDays));
    }
  };

  // When user selects a days/weeks/months radio, set deadlineUnit and commFrequency in contact details
  const changeNumOfDaysRadio = target => {
    dispatch(myAction(SET_DEADLINE_UNIT, target.id));
    const monthDays = differenceInDays((add(compareDate, { months: deadlineNumber })), compareDate);
    switch(target.id) {
      case 'days':
        return dispatch(myAction(SET_COMM_FREQUENCY, deadlineNumber));
      case 'weeks':
        return dispatch(myAction(SET_COMM_FREQUENCY, deadlineNumber * 7));
      case 'months':
        return dispatch(myAction(SET_COMM_FREQUENCY, monthDays));
    }
  };

  // When commFrequency changes, set new deadlineObject in contact details
  useEffect(() => {
    switch(deadlineUnit) {
      case 'days':
        dispatch(myAction(SET_DEADLINE_OBJECT, { days: deadlineNumber, months: 0 }));
        return;
      case 'weeks':
        dispatch(myAction(SET_DEADLINE_OBJECT, { days: deadlineNumber * 7, months: 0 }));
        return;
      case 'months':
        dispatch(myAction(SET_DEADLINE_OBJECT, { days: 0, months: deadlineNumber }));
        return;
    }
  }, [commFrequency]);

  // When deadlineObject changes, set new deadlineDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_DEADLINE_DATE, add(compareDate, deadlineObject)));
  }, [deadlineObject]);

  // When notificationRange or commFrequency change, change slider positions
  useEffect(() => {
    switch(notificationRange) {
      case 1:
        setSlider1(Math.floor(commFrequency / 3));
        setSlider2(Math.floor((2 * commFrequency) / 3));
        return;
      case 2:
        setSlider1(Math.floor(commFrequency / 2));
        setSlider2(Math.floor((3 * commFrequency) / 4));
        return;
      case 3:
        setSlider1(Math.floor((3 * commFrequency) / 4));
        setSlider2(Math.floor((7 * commFrequency) / 8));
        return;
    }
  }, [notificationRange, commFrequency]);

  // When slider positions change, set yellowZoneStartDate and redZoneStartDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_SLIDER_1, slider1));
    dispatch(myAction(SET_SLIDER_2, slider2));
    dispatch(myAction(SET_YELLOW_ZONE, add(compareDate, { days: slider1 })));
    dispatch(myAction(SET_RED_ZONE, add(compareDate, { days: slider2 })));
  }, [slider1, slider2]);

  useEffect(() => {
    dispatch(myAction(SET_TOTAL_GREEN_ZONE_DAYS, differenceInCalendarDays(yellowZoneStartDate, compareDate)));
    dispatch(myAction(SET_TOTAL_YELLOW_ZONE_DAYS, differenceInCalendarDays(redZoneStartDate, yellowZoneStartDate)));
    dispatch(myAction(SET_TOTAL_RED_ZONE_DAYS, differenceInCalendarDays(deadlineDate, redZoneStartDate)));
  }, [yellowZoneStartDate, redZoneStartDate, deadlineDate]);

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
    dispatch(editContactDetails(match.params.id, contact));
    history.push('/contacts');
  };

  return (
    <section className={styles.formWrapper}>
      <form className={styles.DetailForm} onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" value={firstName} />
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name" value={lastName} />
        </div>

        <section>
          <div className={styles.TopSection}>
            <label htmlFor="email">Email</label>
            <label htmlFor="address">Address</label>
            <label htmlFor="phoneNumber">Phone Number</label>
            <label htmlFor="birthdate">Birthdate</label>
          </div>

          <div>
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_EMAIL, target.value))} id="email" name="email" placeholder="Email address" value={email} />
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_ADDRESS, target.value))} id="address" name="address" placeholder="Physical Address" value={address} />
            <input type="text" onChange={({ target }) => dispatch(myAction(SET_PHONE_NUMBER, target.value))} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} />
            <input type="date" onChange={({ target }) => dispatch(myAction(SET_BIRTHDATE, target.value))} id="birthdate" name="birthdate" placeholder="Birthdate" value={birthdate ? birthdate.split('T')[0] : ''} />
          </div>
        </section>

        <section className={styles.notes}><label htmlFor="notes">Notes</label>
          <textarea type="text" onChange={({ target }) => dispatch(myAction(SET_NOTES, target.value))} id="notes" name="notes" value={notes} ></textarea>
        </section>

        <section id="slider" className={styles.ContactFrequencyInput}>
          <div className={styles.Column}><p>Would you like to change your connection settings with {firstName} {lastName}?</p>
            <p>How often do you want to be in contact with {firstName}?</p>

            <div>Every <input type='number' min={1} value={deadlineNumber} onChange={({ target }) => changeNumOfDaysInput(+target.value)} />
              <label htmlFor='days'>Days</label>
              <input type='radio' id='days' name='deadlineUnit' checked={deadlineUnit === 'days'} onChange={({ target }) => changeNumOfDaysRadio(target)} />
              <label htmlFor='weeks'>Weeks</label>
              <input type='radio' id='weeks' name='deadlineUnit' checked={deadlineUnit === 'weeks'} onChange={({ target }) => changeNumOfDaysRadio(target)} />
              <label htmlFor='months'>Months</label>
              <input type='radio' id='months' name='deadlineUnit' checked={deadlineUnit === 'months'} onChange={({ target }) => changeNumOfDaysRadio(target)} />
            </div>
          </div>
          <div className={styles.Range}>
            Choose your notification range for {firstName}:
            <label htmlFor={1}>1</label>
            <input type='radio' name='notificationOptions' id={1} checked={notificationRange === 1} onChange={({ target }) => dispatch(myAction(SET_NOTIFICATION_RANGE, +target.id))} />
            <label htmlFor={2}>2</label>
            <input type='radio' name='notificationOptions' id={2} checked={notificationRange === 2} onChange={({ target }) => dispatch(myAction(SET_NOTIFICATION_RANGE, +target.id))} />
            <label htmlFor={3}>3</label>
            <input type='radio' name='notificationOptions' id={3} checked={notificationRange === 3} onChange={({ target }) => dispatch(myAction(SET_NOTIFICATION_RANGE, +target.id))} /><br /><br /><br />
          </div>
          <p>Your connection deadline with name will be on <span>{deadlineDate && format(new Date(deadlineDate), 'PPPP')}</span></p>
          <p>Your yellow zone will begin on <span>{yellowZoneStartDate && format(new Date(yellowZoneStartDate), 'PPPP')}</span></p>
          <p>Your red zone will begin on <span>{redZoneStartDate && format(new Date(redZoneStartDate), 'PPPP')}</span></p>

        </section>

        <Nouislider style={{ margin: '20px 20px 80px' }} range={{ min: 0, max: commFrequency }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect={[true, true, true]} step={1} pips={{ mode: 'steps', density: 4 }} />

        <button type="submit">Confirm Changes</button>
      </form>
    </section>
  );
};

DetailForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailForm;
