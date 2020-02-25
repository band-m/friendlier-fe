import React, { useState } from 'react';
import DetailView from './DetailView';
import DetailForm from './DetailForm';

const ContactDetail = () => {
  const [showForm, setShowForm] = useState(false);
  const [contactDetail, setContactDetail] = useState({
    userId: 'lhsbkj26785iygkfuyi',
    firstName: 'Norma',
    lastName: 'Sass',
    phoneNumber: '216-456-7890',
    address: '1923 Dingaling way',
    email: 'test@test.com',
    // image: ,
    commFrequency: 60,
    lastContacted: 15,
    birthdate: '2020-03-20T13:34:00.000',
    // specialDates: [],
    notes: 'This is a note'
  });

  const handleChange = () => {
    console.log('plop');
    
    // detailFormFactory[target.name](target.value);
  };

  // useEffect(() => {
  // getContactDetails()
  //     .then(detail => setContactDetail(detail));
  // });

  const handleClick = () => {

    setShowForm(!showForm);
  };
  
  return (
    <>
      {!showForm && <DetailView contactDetail={contactDetail} />}
      {showForm && <DetailForm handleChange={handleChange} contactDetail={contactDetail} />}
      <div onClick={handleClick}>Where the edit icon will eventually go</div>
    </>
  );
};

export default ContactDetail;
