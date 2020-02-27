import React, { useEffect, useState } from 'react';
import styles from './DetailView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneContact, fetchContacts } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';
import { setContactDetails, deleteContactDetails } from '../../../services/contacts';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../../data/selectors/auth-selector';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

const DetailView = ({ match }) => {
  const [contact, setContact] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchOneContact(match.params.id))
      .then(contact => setContact(contact.value));
  }, [match.params.id]);

  const deleteContact = contactId => {
    console.log(contactId);
    deleteContactDetails(contactId);
    dispatch(fetchContacts(user._id));
    history.replace('/contacts');
  };
console.log(contact);

  const { firstName, lastName, lastContactedDate, email, phoneNumber, address, commFrequency, birthdate, notes, deadlineDate, yellowZoneStartDate, redZoneStartDate } = contact;  

  return (
    <section className={styles.DetailView}>
      <div>
        <h2>{firstName} {lastName}</h2>
      </div><br/>
      
      <div>
        <p>Last Contacted: {!lastContactedDate && <span>No contact history yet</span>} {lastContactedDate}</p>
        <p>Yellow Zone Begins: {yellowZoneStartDate} </p>
        <p>Red Zone Begins: {redZoneStartDate}</p>
        <p>Contact Deadline: {deadlineDate} <span></span></p>
      </div><br/>

      <div>
        <div>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Birthdate: {birthdate && birthdate.split('T')[0]}</p>
          <p>Notes: {notes}</p>
        </div><br/>

        {/* <p>Special Dates: {specialDates}</p> */}
      </div>
      <button>Show Contact History</button>
      <button id="delete" onClick={() => deleteContact(contact._id)}>Delete Contact</button>
    </section>
  );
};


DetailView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired

};

export default DetailView;
