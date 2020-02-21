import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';


export default function ContactList(){
  const state = useSelector(state => state);
  const contacts = selectContactsList(state);

  const contactList = contacts.map(contact => {
    const deadline = contact.commFreq - contact.lastContact;
    const commStatus = 
      deadline < contact.yellowZone ? 'green' :
      deadline > contact.yellowZone && deadline < contact.redZone ? 'yellow' :
      deadline > contact.redZone < 1 ? 'red' :
      'overdue';
      

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
