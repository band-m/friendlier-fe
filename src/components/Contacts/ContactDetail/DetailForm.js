import React, { useEffect } from 'react';
import styles from './DetailForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { myAction, postContactDetails } from '../../../data/actions/contact-detail-actions';
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

const DetailForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const details = useSelector(selectContactDetails);
  

  // const contactDeadline = (comFreq, lastCont) => {
  //   return (Number(comFreq) - Number(lastCont));
  // };

  useEffect(() => {
    dispatch(myAction(SET_USER_ID, user._id));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(myAction(SET_CONTACT_DETAILS, ...details));
    dispatch(setContact(details));
    dispatch(postContactDetails(details));
  };

  return (
    <form className={styles.DetailForm} onSubmit={handleSubmit}>
      <div>
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" />
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name"/>
      </div>

      <div>
        <p>Last Contacted <span></span></p>
        <p>Contact Deadline <span></span></p>
      </div>

      <button>Show Contact History</button>

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
      <button type="submit">Create a new contact</button>
    </form>
  );
};

export default DetailForm;
