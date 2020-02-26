import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(selectContactsList);
  
  let contactList;
  if(contacts.length > 0){
    contactList = contacts.map(contact => {
      const ratio = 1 - ((contact.commFreq - contact.lastContact) / contact.commFreq);
      const commStatus =
        ratio < contact.yellowZone ? 'green' :
          ratio > contact.yellowZone && ratio < contact.redZone ? 'yellow' :
            ratio > contact.redZone < 1 ? 'red' :
              'overdue';
      return (
        <Link key={contact._id} to={`/contacts/${contact._id}`}>
          <li className={commStatus}>
            <span>{contact.firstName} {contact.lastName}</span>
            {/* <span>{statusIcon}</span> */}
          </li>
        </Link>);
    });
  }

  return (
    <>
      {contactList && <ul>
        {contactList}
      </ul> }
      {!contactList && <p>Add your first contact to get started!</p>}
      <Link to='/add'>
        <p>+</p>
      </Link>
    </>
  );
}
