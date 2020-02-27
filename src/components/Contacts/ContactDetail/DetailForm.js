import React, { useEffect, useState } from 'react';
import styles from './DetailForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { myAction, postContactDetails, fetchOneContact, editContactDetails } from '../../../data/actions/contact-detail-actions';
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
  SET_CONTACT_DETAILS
} from '../../../data/action-types/action-types';
import { selectUser } from '../../../data/selectors/auth-selector';
import { setContact } from '../../../data/actions/contacts-actions';
import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import { setContactDetails } from '../../../services/contacts';
import { useHistory } from 'react-router-dom';

const DetailForm = ({ match }) => {
  const [slider1, setSlider1] = useState(10);
  const [slider2, setSlider2] = useState(20);
  const [num, setNum] = useState(2);
  const [numOfDays, setNumOfDays] = useState(14);
  const [deadlineUnit, setDeadlineUnit] = useState('weeks');
  const [notificationOption, setNotificationOption] = useState(1);
  const [deadline, setDeadline] = useState();
  const [deadlineObject, setDeadlineObject] = useState({ days: 14, months: 0 });
  const [yellowZone, setYellowZone] = useState();
  const [redZone, setRedZone] = useState();










  const contact = useSelector(selectContactDetails);  
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const details = useSelector(selectContactDetails);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOneContact(match.params.id));
  }, [match.params.id]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editContactDetails(match.params.id, details));
    history.push('/contacts');
  };

  const { firstName, lastName, email, address, phoneNumber, birthdate, notes } = contact;

  return (
    <form className={styles.DetailForm} onSubmit={handleSubmit}>
      <div>
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" value={firstName} />
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name" value={lastName} />
      </div>

      <section>
        <div>
          <label htmlFor="email">Email</label>
          <label htmlFor="address">Address</label>
          <label htmlFor="phoneNumber">Phone Number</label>
          <label htmlFor="birthdate">Birthdate</label>
        </div>

        <div>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_EMAIL, target.value))} id="email" name="email" placeholder="Email address" value={email}/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_ADDRESS, target.value))} id="address" name="address" placeholder="Physical Address" value={address}/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_PHONE_NUMBER, target.value))} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber}/>
          <input type="date" onChange={({ target }) => dispatch(myAction(SET_BIRTHDATE, target.value))} id="birthdate" name="birthdate" placeholder="Birthdate" value={birthdate && birthdate.split('T')[0]} />
        </div>
      </section>

      <section className={styles.notes}><label htmlFor="notes">Notes</label>
        <textarea type="text" onChange={({ target }) => dispatch(myAction(SET_NOTES, target.value))} id="notes" name="notes" value={notes} ></textarea>
      </section>

      <section id='slider'>
      <p>Would you like to change your connection settings with {firstName} {lastName}?</p><br/><br/>
      <p>How often do you want to be in contact with name?</p>
      <p>Every</p>
      <input type='number' min={1} value={num} onChange={({target}) => changeNumOfDaysInput(+target.value)} /><br/>
      <label htmlFor='days'>Days</label>
      <input type='radio' id='days' name='deadlineUnit' checked={deadlineUnit === 'days'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='weeks'>Weeks</label>
      <input type='radio' id='weeks' name='deadlineUnit' checked={deadlineUnit === 'weeks'} onChange={({target}) => changeNumOfDaysRadio(target)}/>
      <label htmlFor='months'>Months</label>
      <input type='radio' id='months' name='deadlineUnit' checked={deadlineUnit === 'months'} onChange={({target}) => changeNumOfDaysRadio(target)}/><br/><br/><br/>

      </section>

      <button type="submit">Edit contact</button>
    </form>
  );
};

export default DetailForm;
