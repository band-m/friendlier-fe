import React, { useEffect, useState } from 'react';
// import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import styles from './DetailView.css';
import { useDispatch } from 'react-redux';
import { fetchOneContact } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';


const DetailView=({ match }) => {

  console.log(match);

  const dispatch=useDispatch();
  const [contact, setContact]=useState([]);

  useEffect(() => {
    setContact(dispatch(fetchOneContact(match.params.id)));

  }, []);
  console.log(contact);


  return (
    <section className={styles.DetailView}>
      {/* <div>
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
      <button id="delete" onClick={deleteContact}>Delete Contact</button> */}
    </section>
  );
};


DetailView.propTypes={
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired

};

export default DetailView;
