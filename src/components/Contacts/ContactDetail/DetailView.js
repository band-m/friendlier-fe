import React from 'react';
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

  const contact = useSelector(state => selectSelectedContact(state, match.params.id));

  if(!contact) return null;

  dispatch(myAction(SET_CONTACT_DETAILS, contact));

  const { firstName, lastName, lastContactedDate, email, phoneNumber, address, birthdate, notes, deadlineDate, yellowZoneStartDate, redZoneStartDate, slider1, slider2, deadlineObject } = contact;

  const deleteOne = contactId => {
    dispatch(deleteContact(contactId));
    history.replace('/contacts');
  };

  return (
    <section className={styles.DetailView}>
      <div>
        <h2 className={styles.name}>{firstName} {lastName}</h2>
      </div><br />

      <div className={styles.contactDetailText}>
        <p>Last Contacted: {!lastContactedDate && <span>No contact history yet</span>} {lastContactedDate && format(new Date(lastContactedDate), 'PPPP')}</p>
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
