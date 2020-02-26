import React, { useEffect, useState } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import add from 'date-fns/add';
import format from 'date-fns/format';
import differenceInDays from 'date-fns/differenceInCalendarDays';
import styles from './ContactDetail/DetailForm.css';
import parse from 'date-fns/parse';
import { useSelector, useDispatch } from 'react-redux';
import { myAction, postContactDetails } from '../../data/actions/contact-detail-actions';
import {
  SET_USER_ID,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  // SET_IMAGE,
  SET_NOTES,
  SET_BIRTHDATE,
  SET_RED_ZONE,
  SET_YELLOW_ZONE,
  SET_COMM_FREQUENCY,
  SET_EMAIL,
  SET_ADDRESS,
  SET_PHONE_NUMBER,
  SET_SPECIAL_DATES,
  SET_CONTACT_DETAILS,
  SET_DEADLINE_OBJECT,
  SET_NOTIFICATION_RANGE,
  SET_DEADLINE_DATE,
  SET_CONTACT_CREATED_ON
} from '../../data/action-types/action-types';
import { selectUser } from '../../data/selectors/auth-selector';
import { setContact } from '../../data/actions/contacts-actions';
import { selectContactDetails } from '../../data/selectors/contact-detail-selectors';
import { useHistory } from 'react-router-dom';

export default function AddContact(){
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);
  const [num, setNum] = useState(2);
  const [numOfDays, setNumOfDays] = useState(14);
  const [deadlineUnit, setDeadlineUnit] = useState('weeks');
  const [notificationOption, setNotificationOption] = useState(1);
  const [deadline, setDeadline] = useState();
  const [deadlineObject, setDeadlineObject] = useState({ days: 14, months: 0 })
  const [yellowZone, setYellowZone] = useState();
  const [redZone, setRedZone] = useState();

  // When user moves a slider, set slider
  const update = (render, handle, value, un, percent) => {    
    if(handle === 0){
      setSlider1(Math.floor(value[0]))
    } else {
      setSlider2(Math.floor(value[1]))
    }
  }

  // When user inputs a number, change num and numOfDays
  const changeNumOfDaysInput = value => {
    setNum(value);
    switch(deadlineUnit){
      case 'days':
        return setNumOfDays(value);
      case 'weeks':
        return setNumOfDays(value * 7);
      case 'months':
        const monthDays = differenceInDays((add(new Date(), { months: value })), new Date());
        return setNumOfDays(monthDays);
    }
  }

  // When user selects a days/weeks/months radio, change deadlineUnit and numOfDays
  const changeNumOfDaysRadio = target => {
    setDeadlineUnit(target.id);
    switch(target.id){
      case 'days':
        return setNumOfDays(num);
      case 'weeks':
        return setNumOfDays(num * 7);
      case 'months':
        const monthDays = differenceInDays((add(new Date(), { months: num })), new Date());
        return setNumOfDays(monthDays);
    }
  }

  // When numOfDays changes, make new deadlineObject and set commFrequency in contact details
  useEffect(() => {
    dispatch(myAction(SET_COMM_FREQUENCY, numOfDays));
    switch(deadlineUnit){
      case 'days':
        return setDeadlineObject({ days: num, months: 0 });
      case 'weeks':
        return setDeadlineObject({ days: num * 7, months: 0 });
      case 'months':
        return setDeadlineObject({ days: 0, months: num });
    };  
  }, [numOfDays])

  // When deadlineObject changes, make new deadline and set deadlineObject in contact details
  useEffect(() => {
    dispatch(myAction(SET_DEADLINE_OBJECT, deadlineObject));
    setDeadline(format(add(new Date(), deadlineObject), "PPPP"));
  }, [deadlineObject])

  // When deadline changes, set deadlineDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_DEADLINE_DATE, deadline));
  }, [deadline])

  // When notificationOption changes, set notificationRange in contact details
  useEffect(() => {
    dispatch(myAction(SET_NOTIFICATION_RANGE, notificationOption));
  }, [notificationOption])

  // When notificationObject or numOfDays changes, change slider positions
  useEffect(() => {
    switch(notificationOption){
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
  }, [notificationOption, numOfDays])

  // When slider positions change, change yellowZone and redZone
  useEffect(() => {
    setYellowZone(format(add(new Date(), { days: slider1 }), "PPPP"));
    setRedZone(format(add(new Date(), { days: slider2 }), "PPPP"))
  }, [slider1, slider2])

  // When yellowZone or redZone change, set yellowZoneStartDate and redZoneStartDate in contact details
  useEffect(() => {
    dispatch(myAction(SET_YELLOW_ZONE, yellowZone));
    dispatch(myAction(SET_RED_ZONE, redZone));
  }, [yellowZone, redZone])

  // On initial load, add colors to the range connectors
  useEffect(() => {
    const connectors = document.querySelectorAll('.noUi-connect');
    const classes = ['c-1-color', 'c-2-color', 'c-3-color'];
    for(let i = 0; i < connectors.length; i++){
      connectors[i].classList.add(classes[i]);
    } 
  }, [])












  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const details = useSelector(selectContactDetails);
  const history = useHistory();

  useEffect(() => {
    if(user){
      dispatch(myAction(SET_USER_ID, user._id));
      dispatch(myAction(SET_CONTACT_CREATED_ON, format(new Date(), "PPPP")));
    }
  }, [user]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(setContact(details));
    dispatch(postContactDetails(details));
    history.push('/contacts');
  };  
  
  return (
    <form className={styles.DetailForm} onSubmit={handleSubmit}>
      <div>
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" />
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name"/>
      </div>

      <section>
        <div>
          <label htmlFor="email">Email</label>
          <label htmlFor="address">Address</label>
          <label htmlFor="phoneNumber">Phone Number</label>
          <label htmlFor="birthdate">Birthdate</label>
          <label htmlFor="notes">Notes</label>
        </div>

        <div>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_EMAIL, target.value))} id="email" name="email" placeholder="Email address"/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_ADDRESS, target.value))} id="address" name="address" placeholder="Physical Address"/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_PHONE_NUMBER, target.value))} id="phoneNumber" name="phoneNumber" placeholder="Phone Number"/>
          {
            /* <input type="text" onChange={({ target }) => dispatch(myAction(SET_IMAGE, target.value))} id="image" name="image" value={image || ''} placeholder="First Name"/> */ }
          <input type="date" onChange={({ target }) => dispatch(myAction(SET_BIRTHDATE, target.value))} id="birthdate" name="birthdate" placeholder="Birthdate" />
          <textarea type="text" onChange={({ target }) => dispatch(myAction(SET_NOTES, target.value))} id="notes" name="notes"></textarea>
          {
            /* <input type="date" onChange={({ target }) => dispatch(myAction(SET_SPECIAL_DATES, target.value))} id="specialDates" name="specialDates" value={specialDates || ''} placeholder="First Name"/> */ }
        </div>
      </section>

      <section id='slider'>
      <p>How often do you want to be in contact with name?</p>
      <p>Every</p>
      <input type='number' min={1} value={num} onChange={({target}) => changeNumOfDaysInput(+target.value)} /><br/>
      <label htmlFor='days'>Days</label>
      <input type='radio' id='days' name='deadlineUnit' checked={deadlineUnit === 'days'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='weeks'>Weeks</label>
      <input type='radio' id='weeks' name='deadlineUnit' checked={deadlineUnit === 'weeks'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='months'>Months</label>
      <input type='radio' id='months' name='deadlineUnit' checked={deadlineUnit === 'months'} onChange={({target}) => changeNumOfDaysRadio(target)}/><br/><br/><br/>

      <p>Choose your notification range for name:</p>
      <label htmlFor={1}>1</label>
      <input type='radio' name='notificationOptions' id={1} checked={notificationOption === 1} onChange={({target}) => setNotificationOption(+target.id)} />
      <label htmlFor={2}>2</label>
      <input type='radio' name='notificationOptions' id={2} checked={notificationOption === 2} onChange={({target}) => setNotificationOption(+target.id)} />
      <label htmlFor={3}>3</label>
      <input type='radio' name='notificationOptions' id={3} checked={notificationOption === 3} onChange={({target}) => setNotificationOption(+target.id)} /><br/><br/><br/>

      <p>Your connection deadline with name will be on {deadline}</p>
      <p>Your yellow zone will begin on {yellowZone}</p>
      <p>Your red zone will begin on {redZone}</p>
      </section>
      <Nouislider style={{ margin: '25px' }} onSlide={update} range={{ min: 0, max: numOfDays }} start={[slider1, slider2]} margin={1} tooltips={[true, true]} connect={[true, true, true]} step={1} pips={{ mode: 'steps', density: 4 }} />
      
      <button type="submit">Create a new contact</button>
    </form>
  );
}
