import React from 'react';
// import { selectContactDetails } from '../../../data/selectors/contact-detail-selectors';
import styles from './DetailView.css';
import { useDispatch } from 'react-redux';
import { fetchOneContact } from '../../../data/actions/contact-detail-actions';
import PropTypes from 'prop-types';


const DetailView=({ match }) => {
  const dispatch=useDispatch();
  const contact=dispatch(fetchOneContact(match.params.contactId));

  console.log(contact);


  // useEffect(() => {
  //   fetchData = async() => {
  //     const data = await getContactDetails(match.params.contactId);
  //     dispatch();
  //   };
  // });


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
      contactId: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired

};

export default DetailView;
