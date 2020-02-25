import React, { useEffect } from 'react';
import { getContactDetails } from '../../data/selectors/contact-detail-selectors';


export const ContactDetailView=({ match }) => {

  const contact=getContactDetails(match.params.contactId);

  useEffect(() => {
    fetchData = async () => {
      comst data = await getContactDetails(match.params.contactId)
      dispatch
    }
  })


  return (
    <section>
      <p>{contact.firsName}</p>
      <p>{contact.lastName}</p>
      <p>{contact.address}</p>
      <p>{contact.phoneNumber}</p>
      <p>{contact.email}</p>
      <p>{contact.commFreq}</p>
      <p>{contact.lastContacted}</p>
      <p>{contact.birthdate}</p>
      <p>{contact.notes}</p>
      <p>{}</p>
    </section>
  );
};


