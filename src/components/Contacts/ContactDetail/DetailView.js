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
      <div className={styles.FullName}>
        {firstName &&
          <h2>{firstName}</h2>
        }
        {lastName &&
          <h2>{lastName}</h2>
        }
      </div>
      <div className={styles.ContactHistory}>
        <div className={styles.Column}>
          <p>Last Contacted <span>{lastContacted}</span></p>
          <p>Contact Deadline <span></span></p>
        </div>

        <button>Show Contact History</button>
      </div>

      <div className={styles.ContactFields}>
        {email &&
          <p>Email: {email}</p>
        }
        {address &&
          <p>Address: {address}</p>
        }
        {phoneNumber &&
          <p>Phone Number: {phoneNumber}</p>
        }
        {birthdate &&
          <p>Birthdate: {birthdate}</p>
        }
        {notes &&
          <p>Notes: {notes}</p>
        }
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
