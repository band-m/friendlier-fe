import React from 'react';

const DetailView = ({ contactDetail }) => {
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

  return (
    <div>Killer Whale</div>
  );
};

export default DetailView;
