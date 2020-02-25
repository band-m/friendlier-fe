import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DetailForm.css';
import { useSelector } from 'react-redux';
import { getContactDetail } from '../../../data/selectors/contact-detail-selectors';
// import { getContactDetails } from '../../../services/getContactDetails;;';

const DetailForm = ({ handleChange }) => {
  const contactDetails = useSelector(getContactDetail);
  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
    commFrequency,
    lastContacted,
    birthdate,
    notes
  } = contactDetails;

  const contactDeadline = (comFreq, lastCont) => {
    return (Number(comFreq) - Number(lastCont));
  };

  return (
    <>
      <form className={styles.DetailForm}>
        <div>
          <input type="text" onChange={handleChange} name="firstName" value={firstName || ''} placeholder="First Name" />
          <input type="text" onChange={handleChange} name="lastName" value={lastName || ''} placeholder="Last Name"/>
        </div>

        <div>
          <p>Last Contacted <span>{lastContacted}</span></p>
          <p>Contact Deadline <span>{contactDeadline(commFrequency, lastContacted)}</span></p>
        </div>

        <button>Show Contact History</button>

        <section>
          <div>
            <label htmlFor="email">Email</label>
            <label htmlFor="address">Address</label>
            <label htmlFor="phoneNumber">Phone Number</label>
            <label htmlFor="birthdate">Birthdate</label>
            <label htmlFor="notes">Notes</label>
          </div>

          <div>
            <input type="text" onChange={handleChange} id="email" name="email" value={email || ''} placeholder="Email address"/>
            <input type="text" onChange={handleChange} id="address" name="address" value={address || ''} placeholder="Physical Address"/>
            <input type="text" onChange={handleChange} id="phoneNumber" name="phoneNumber" value={phoneNumber || ''} placeholder="Phone Number"/>
            {
              /* <input type="text" onChange={handleChange} id="image" name="image" value={image || ''} placeholder="First Name"/> */ }
            <input type="date" onChange={handleChange} id="birthdate" name="birthdate" value={birthdate || ''} placeholder="Birthdate" />
            <textarea type="text" onChange={handleChange} id="notes" name="notes" value={notes || ''}></textarea>
            {
              /* <input type="date" onChange={handleChange} id="specialDates" name="specialDates" value={specialDates || ''} placeholder="First Name"/> */ }
          </div>
        </section>
      </form>
    </>
  );
};

DetailForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  contactDetail: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    commFrequency: PropTypes.number.isRequired,
    lastContacted: PropTypes.number,
    birthdate: PropTypes.string,
    notes: PropTypes.string
  }).isRequired
};

export default DetailForm;
