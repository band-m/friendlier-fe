import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactList(){
  // get contacts from state
  const contacts = getContacts();
  const contactList = contacts.map(contact => {
    const statusIcon = goal/lastContact > 

    <Link to=''>
      <li key={contact.id}>
        {contact.name}{statusIcon}
      </li>
    </Link>
  });

  return (
    <>
      <ul>
        {contactList}
      </ul>
    </>
  )
}
