import React, { useState } from 'react';
import styles from './DetailView.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import format from 'date-fns/format';
import { selectSelectedContact } from '../../../data/selectors/contacts-selectors';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { deleteContact } from '../../../data/actions/contacts-actions';
import { myAction } from '../../../data/actions/contact-detail-actions';
import { SET_CONTACT_DETAILS } from '../../../data/action-types/action-types';
import ConnectedButton from '../ConnectedButton';

const DetailView = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showHistory, setShowHistory] = useState(false);

  const contact = useSelector(state => selectSelectedContact(state, match.params.id));

  if(!contact) return null;

  dispatch(myAction(SET_CONTACT_DETAILS, contact));

  const { firstName, lastName, lastContactedDate, email, phoneNumber, address, birthdate, notes, deadlineDate, yellowZoneStartDate, redZoneStartDate, slider1, slider2, deadlineObject, connHistory } = contact;

  const deleteOne = contactId => {
    dispatch(deleteContact(contactId));
    history.replace('/contacts');
  };

  const toggleContactHistory = () => {
    setShowHistory(!showHistory);
  };

  const contactEvents = connHistory.map(connection => (
    <li key={connection}>
      <p>{format(new Date(connection), 'PPpp')}</p>
    </li>
  ));

  return (
    <section className={styles.DetailView}>
      <div>
        <h2 className={styles.name}>{firstName} {lastName}</h2>
      </div><br />

      <div className={styles.contactDetailText}>
        <p>Last Contacted: {!lastContactedDate && <span>No contact history yet</span>} <span>{lastContactedDate && format(new Date(lastContactedDate), 'PPPP')}</span></p>
        <p>Yellow Zone Begins: <span>{yellowZoneStartDate && format(new Date(yellowZoneStartDate), 'PPPP')}</span></p>
        <p>Red Zone Begins: <span>{redZoneStartDate && format(new Date(redZoneStartDate), 'PPPP')}</span></p>
        <p>Contact Deadline: <span>{deadlineDate && format(new Date(deadlineDate), 'PPPP')}</span></p>
      </div><br />

      <div className={styles.ContactFields}>
        {email && <p>Email: <span>{email}</span></p>}

        {address && <p>Address: <span>{address}</span></p>}

        {phoneNumber && <p>Phone Number: <span>{phoneNumber}</span></p>}

        {birthdate && <p>Birthdate: <span>{birthdate.split('T')[0]}</span></p>}

        {/* {notes && styleName={styles.Notes}><p>Notes: {notes}</p>} */}
      </div>

      <div className={styles.connectionHistory}>
        <button onClick={toggleContactHistory} className={styles.ShowHistory}>Show contact history</button>
        {showHistory && 
          <ol>
            {contactEvents.length > 0 && contactEvents}
            {contactEvents.length === 0 && <p>No connection events yet! No time like the present! Why don't you give {firstName} a call?</p>}
          </ol>
        }
      </div>

      <div className={styles.ToolbarBottom}>
        <FaTrashAlt className={styles.delete} id="delete" onClick={() => deleteOne(contact._id)} />
        <ConnectedButton slider1={slider1} slider2={slider2} deadlineObject={deadlineObject} id={contact._id} />
        <Link to={`/edit/${contact._id}`}><AiFillEdit className={styles.edit} id="edit" /></Link>
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
