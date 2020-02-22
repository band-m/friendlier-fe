import React from 'react';
import PropTypes from 'prop-types';
// import { getContactDetails } from '../../../services/getContactDetails';

const DetailForm = ({ contactDetail }) => {
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
  } = contactDetail;
  const contactDeadline = (comFreq, lastCont) => {
    return (Number(comFreq) - Number(lastCont));
  };

  return (
    <>
      <form>
        <div>
          <input type="text" name="firstName" value={firstName || ''} placeholder="*First Name" />
          <input type="text" name="lastName" value={lastName || ''} placeholder="Last Name"/>
        </div>

        <label htmlFor="commFrequency">Choose a frequency:
          <select id="commFrequency" name="commFrequency">
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </label>

        <div>
          <p>Last Contacted <span>{lastContacted}</span></p>
          <p>Contact Deadline <span>{contactDeadline(commFrequency, lastContacted)}</span></p>
        </div>

        <button>Show Contact History</button>

        <section>
          <div>
            <label htmlFor="email">Email</label>
            <label htmlFor="addres">Address</label>
            <label htmlFor="phoneNumber">Phone Number</label>
            <label htmlFor="birthdate">Birthdate</label>
            <label htmlFor="notes">Notes</label>
          </div>

          <div>
            <input type="text" id="email" name="email" value={email || ''} placeholder="Email address"/>
            <input type="text" id="address" name="address" value={address || ''} placeholder="Physical Address"/>
            <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber || ''} placeholder="Phone Number"/>
            {/* <input type="text" id="image" name="image" value={image || ''} placeholder="First Name"/> */}
            <input type="date" id="birthdate" name="birthdate" value={birthdate || ''} placeholder="Birthdate" />
            <textarea type="text" id="notes" name="notes" value={notes || ''}></textarea>
            {/* <input type="date" id="specialDates" name="specialDates" value={specialDates || ''} placeholder="First Name"/> */}
          </div>
        </section>
      </form>
    </>
  );
};

DetailForm.propTypes = {
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
