import React, { useEffect, useState } from 'react';
import styles from './DetailView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneContact, fetchContacts } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';
import { setContactDetails, deleteContactDetails } from '../../../services/contacts';
import { useHistory, Link } from 'react-router-dom';
import { selectUser } from '../../../data/selectors/auth-selector';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import { selectSelectedContact } from '../../../data/selectors/contacts-selectors';

const DetailView = ({ match }) => {
  const contact = useSelector(state => selectSelectedContact(state, match.params.id));  

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if(!contact) return null;

  // useEffect(() => {
  //   dispatch(fetchOneContact(match.params.id))
  //     .then(contact => setContact(contact.value));
  // }, [match.params.id]);
  
  const deleteContact = contactId => {
    console.log(contactId);
    deleteContactDetails(contactId);
    dispatch(fetchContacts(user._id));
    history.replace('/contacts');
  };

  const { firstName, lastName, lastContactedDate, email, phoneNumber, address, birthdate, notes, deadlineDate, yellowZoneStartDate, redZoneStartDate } = contact;  

  return (
    <section className={styles.DetailView}>
      <div>
        <h2>{firstName} {lastName}</h2>
      </div><br/>
      
      <div>
        <p>Last Contacted: {!lastContactedDate && <span>No contact history yet</span>} {lastContactedDate && format(lastContactedDate, "PPPP")}</p>
        <p>Yellow Zone Begins: {yellowZoneStartDate && format(new Date(yellowZoneStartDate), "PPPP")} </p>
        <p>Red Zone Begins: {redZoneStartDate && format(new Date(redZoneStartDate), "PPPP")}</p>
        <p>Contact Deadline: {deadlineDate && format(new Date(deadlineDate), "PPPP")} <span></span></p>
      </div><br/>

      <div>
        <div>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Birthdate: {birthdate ? birthdate.split('T')[0] : ''}</p>
          <p>Notes: {notes}</p>
        </div><br/>

        {/* <p>Special Dates: {specialDates}</p> */}
      </div>
      <button>Show Contact History</button><br/><br/>
      <Link to={`/edit/${contact._id}`}>
      <button>Edit contact</button>
      </Link>
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
