import React, { useState } from 'react';
import DetailView from './DetailView';
import DetailForm from './DetailForm';

const ContactDetail = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {

    setShowForm(!showForm);
  };
  
  return (
    <>
      {!showForm && <DetailView />}
      {showForm && <DetailForm />}
      <div onClick={handleClick}>Where the edit icon will eventually go</div>
    </>
  );
};

export default ContactDetail;
