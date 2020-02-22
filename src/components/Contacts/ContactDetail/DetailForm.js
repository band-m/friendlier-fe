import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { getContactDetails } from '../../../services/getContactDetails';

const DetailForm = () => {
  const [details] = useState({
    userId: 'lhsbkj26785iygkfuyi',
    firstName: 'Norma',
    lastName: 'Sass',
    phoneNumber: '216-456-7890',
    address: '1923 Digaling way',
    email: 'test@test.com',
    // image: ,
    commFrequency: 60,
    lastContacted: 15,
    birthdate: '2020-03-20T13:34:00.000',
    // specialDates: [],
    notes: 'This is a note'
  });

  // useEffect(() => {
  //   getContactDetails(match.params._id)
  //     .then(details => setDetails(details));
  // });

  const contactDeadline = (deets) => {
    return (Number(deets.commFrequency) - Number(deets.lastContacted));
  };

  return (
    <>
      <form>
        <div>
          <input type="text" name="firstName" value={details.firstName || ''} placeholder="*First Name" />
          <input type="text" name="lastName" value={details.lastName || ''} placeholder="Last Name"/>
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
          <p>Last Contacted <span>{details.lastContacted}</span></p>
          <p>Contact Deadline <span>{contactDeadline(details)}</span></p>
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
            <input type="text" id="email" name="email" value={details.email || ''} placeholder="Email address"/>
            <input type="text" id="address" name="address" value={details.address || ''} placeholder="Physical Address"/>
            <input type="text" id="phoneNumber" name="phoneNumber" value={details.phoneNumber || ''} placeholder="Phone Number"/>
            {/* <input type="text" id="image" name="image" value={details.image || ''} placeholder="First Name"/> */}
            <input type="date" id="birthdate" name="birthdate" value={details.birthdate || ''} placeholder="Birthdate" />
            <textarea type="text" id="notes" name="notes" value={details.notes || ''}></textarea>
            {/* <input type="date" id="specialDates" name="specialDates" value={details.specialDates || ''} placeholder="First Name"/> */}
          </div>
        </section>
      </form>
    </>
  );
};

// DetailForm.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       _id: PropTypes.string.isRequired
//     })
//   }).isRequired
// };

export default DetailForm;
