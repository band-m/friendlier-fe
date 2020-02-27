import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';
import { fetchContacts } from '../../data/actions/contacts-actions';
import { selectUser } from '../../data/selectors/auth-selector';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import styles from './ContactList.css';
import { SET_CONTACT_CREATED_ON } from '../../data/action-types/action-types';

export default function ContactList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if(user) {
      dispatch(fetchContacts(user._id));
    }
  }, [user]);
  
  const contacts = useSelector(selectContactsList);

  const greenZoneContacts = contacts.filter(contact => isFuture(contact.yellowZoneStartDate));
  const yellowZoneContacts = contacts.filter(contact => isFuture(contact.redZoneStartDate));
  const redZoneContacts = contacts.filter(contact => isFuture(contact.deadlineDate));
  const pastDeadlineContacts = contacts.filter(contact => isPast(contact.deadlineDate));

  const sortedGreen = ()
  
  const makeListItems = zone => {
    if(zone.length){
      return zone.map(contact => {
        return (
          <Link key={contact._id} to={`/contacts/${contact._id}`}>
            <li className={styles.commStatus}>
              <span>{contact.firstName} {contact.lastName}</span>
              {/* <span>{statusIcon}</span> */}
            </li>
          </Link>
        );
      });
    }
  };

  let greenZoners = makeListItems(greenZoneContacts);
  let redZoners = makeListItems(yellowZoneContacts);
  let yellowZoners = makeListItems(redZoneContacts);
  let pastDeadlineZoners = makeListItems(pastDeadlineContacts);


  // let contactList;
  // if(contacts.length) {
  //   contactList = contacts.map(contact => {
  //     return (
  //       <Link key={contact._id} to={`/contacts/${contact._id}`}>
  //         <li className={styles.commStatus}>
  //           <span>{contact.firstName} {contact.lastName}</span>
  //           {/* <span>{statusIcon}</span> */}
  //         </li>
  //       </Link>);
  //   });
  // }

  return (
    <section className={styles.ContactList}>
      {contactList && <ul>
        {contactList}
      </ul>}
      {!contactList && <p>Add your first contact to get started!</p>}
      <Link to='/add'>
        <button title="Add New Contact">+</button>
      </Link>
    </section>
  );
}
