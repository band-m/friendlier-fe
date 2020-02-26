import React, { useEffect, useState } from 'react';
import styles from './DetailView.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneContact, fetchContacts } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';
import { setContactDetails, deleteContactDetails } from '../../../services/contacts';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../../data/selectors/auth-selector';

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

  const { firstName, lastName, lastContacted, email, phoneNumber, address, commFrequency, birthdate, notes } = contact;

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

        {/* <p>Special Dates: {specialDates}</p> */}
      </div>
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
