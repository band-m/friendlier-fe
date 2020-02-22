import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';

export default function ContactList(){
  const contacts = useSelector(selectContactsList);

  const contactList = contacts.map(contact => {
    const ratio = 1 - ((contact.commFreq - contact.lastContact) / contact.commFreq);
    const commStatus = 
      ratio < contact.yellowZone ? 'green' :
      ratio > contact.yellowZone && ratio < contact.redZone ? 'yellow' :
      ratio > contact.redZone < 1 ? 'red' :
      'overdue';
      
    <Link to={`/contacts/${contact._id}`}>
      <li className={commStatus} key={contact._id}>
        <span>{contact.firstName} {contact.lastName}</span>
        <span>{statusIcon}</span>
      </li>
    </Link>
  });

  return (
    <>
      <ul>
        {contactList}
      </ul>
      <Link to='contacts/add'>
        <img src='PLUS_ICON'></img>
      </Link>
    </>
  )
}
