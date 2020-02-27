import React, { useEffect, useState } from 'react';
import styles from './DetailView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneContact, fetchContacts } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';
// import { setContactDetails, deleteContactDetails } from '../../../services/contacts';
import { useHistory, Link } from 'react-router-dom';
import { selectUser } from '../../../data/selectors/auth-selector';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import { selectSelectedContact } from '../../../data/selectors/contacts-selectors';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

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
    dispatch(deleteContact(contactId));
    // dispatch(fetchContacts(user._id));
    history.replace('/contacts');
  };

  const { firstName, lastName, lastContactedDate, email, phoneNumber, address, birthdate, notes, deadlineDate, yellowZoneStartDate, redZoneStartDate } = contact;

  return (
    <section className={styles.DetailView}>
      <div>
        <h2>{firstName} {lastName}</h2>
      </div><br />

      <div>
        <p>Last Contacted: {!lastContactedDate && <span>No contact history yet</span>} {lastContactedDate && format(lastContactedDate, 'PPPP')}</p>
        <p>Yellow Zone Begins: {yellowZoneStartDate && format(new Date(yellowZoneStartDate), 'PPPP')} </p>
        <p>Red Zone Begins: {redZoneStartDate && format(new Date(redZoneStartDate), 'PPPP')}</p>
        <p>Contact Deadline: {deadlineDate && format(new Date(deadlineDate), 'PPPP')} <span></span></p>
      </div><br />

      <div className={styles.ContactFields}>
        {email &&
          <div><p>Email</p> <p>{email}</p></div>}

        {address && <div><p>Address</p><p>{address}</p></div>}

        {phoneNumber && <div><p>Phone Number</p> <p>{phoneNumber}</p></div>}

        {birthdate && <div><p>Birthdate</p><p>{birthdate.split('T')[0]}</p></div>}

        {notes && <div styleName={styles.Notes}><p>Notes</p><p>{notes}</p></div>}

        {/* <p>Special Dates: {specialDates}</p> */}
      </div>
      <div className={styles.ToolbarBottom}>
        <FaTrashAlt id="delete" onClick={() => deleteContact(contact._id)} />
        <Link to={`/edit/${contact._id}`}><AiFillEdit id="edit" /></Link>
      </div>
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
