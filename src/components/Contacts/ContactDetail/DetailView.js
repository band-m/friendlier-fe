import React, { useEffect }   from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactDetails } from '../../../data/actions/contact-detail-actions';
import styles from './DetailView.css';
import { SET_CONTACT_DETAILS } from '../../../data/action-types/action-types';
import { getContactDetails } from '../../../services/contacts';

const DetailView = () => {
  const dispatch = useDispatch();
  const contactDetail = useSelector(getContactDetails);
  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
    commFrequency,
    lastContacted,
    yellowZone,
    redZone,
    connHistory,
    specialDates,
    birthdate,
    notes
  } = contactDetail;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContactDetails(contactId));
  // });

  return (
    <section className={styles.DetailView}>
      <div>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
      </div>

      <div>
        <p>Last Contacted <span>{lastContacted}</span></p>
        <p>Contact Deadline <span></span></p>
      </div>

      <button>Show Contact History</button>

      <div>
        <div>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Birthdate: {birthdate}</p>
          <p>Notes: {notes}</p>
        </div>

        <p>Special Dates: {specialDates}</p>
      </div>
    </section>
  );
};

export default DetailView;
