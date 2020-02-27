import React, { useEffect, useState } from 'react';
import styles from './DetailForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { myAction, postContactDetails, fetchOneContact } from '../../../data/actions/contact-detail-actions';
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

const DetailForm = ({ match }) => {
  const contact = useSelector(selectContactDetails);  
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const details = useSelector(selectContactDetails);

  useEffect(() => {
    dispatch(fetchOneContact(match.params.id));
  }, [match.params.id]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(myAction(SET_CONTACT_DETAILS, ...details));
    dispatch(setContact(details));
    dispatch(postContactDetails(details));
  };

  const { firstName, lastName, email, address, phoneNumber, birthdate, notes } = contact;

  return (
    <form className={styles.DetailForm} onSubmit={handleSubmit}>
      <div>
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_FIRST_NAME, target.value))} name="firstName" placeholder="First Name" value={firstName} />
        <input type="text" onChange={({ target }) => dispatch(myAction(SET_LAST_NAME, target.value))} name="lastName" placeholder="Last Name" value={lastName} />
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
        </div>

        <div>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_EMAIL, target.value))} id="email" name="email" placeholder="Email address" value={email}/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_ADDRESS, target.value))} id="address" name="address" placeholder="Physical Address" value={address}/>
          <input type="text" onChange={({ target }) => dispatch(myAction(SET_PHONE_NUMBER, target.value))} id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber}/>
          {
            /* <input type="text" onChange={({ target }) => dispatch(myAction(SET_IMAGE, target.value))} id="image" name="image" value={image || ''} placeholder="First Name"/> */}
          <input type="date" onChange={({ target }) => dispatch(myAction(SET_BIRTHDATE, target.value))} id="birthdate" name="birthdate" placeholder="Birthdate" value={birthdate} />

          {
            /* <input type="date" onChange={({ target }) => dispatch(myAction(SET_SPECIAL_DATES, target.value))} id="specialDates" name="specialDates" value={specialDates || ''} placeholder="First Name"/> */}
        </div>
      </section>
      <section className={styles.notes}><label htmlFor="notes">Notes</label>
        <textarea type="text" onChange={({ target }) => dispatch(myAction(SET_NOTES, target.value))} id="notes" name="notes" value={notes} ></textarea>
      </section>
      <button type="submit">Create a new contact</button>
    </form>
  );
};

export default DetailForm;
