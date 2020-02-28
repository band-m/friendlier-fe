import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';
import { fetchContacts } from '../../data/actions/contacts-actions';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { selectUser, selectLoggedOut } from '../../data/selectors/auth-selector';
import styles from './ContactList.css';
import { SET_CONTACT_CREATED_ON } from '../../data/action-types/action-types';

export default function ContactList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loggedOut = useSelector(selectLoggedOut);

  useEffect(() => {
    if(user) {
      dispatch(fetchContacts(user._id));
    }
  }, [user]);

  useEffect(() => {
    if(loggedOut) {
      history.push('/');
    }
  }, [loggedOut]);

  const contacts = useSelector(selectContactsList);

  // const greenZoneContacts = contacts.filter(contact => isFuture(new Date(contact.yellowZoneStartDate)));
  // const yellowZoneContacts = contacts.filter(contact => isFuture(new Date(contact.redZoneStartDate)) && isPast(new Date(contact.yellowZoneStartDate)));
  // const redZoneContacts = contacts.filter(contact => isFuture(new Date(contact.deadlineDate)) && isPast(new Date(redZoneStartDate)));
  // const overdueContacts = contacts.filter(contact => isPast(new Date(contact.deadlineDate)));

  // const getRatio = (contacts, zoneDays) => {
  //   return contacts.map(contact => {
  //     const daysIntoZone = contact.lastContactedDate ?
  //       differenceInCalendarDays(contact.lastContactedDate, Date.now()) :
  //       differenceInCalendarDays(contact.createdOn, Date.now());
  //     const ratio = daysIntoZone / zoneDays;
  //   });
  // };

  // SET_CURRENT_ZONE_RATIO

  // yellowZoneContacts.map(contact => {
  //   const daysIntoZone = contact.lastContactedDate ? 
  //     differenceInCalendarDays(contact.lastContactedDate, Date.now()) :
  //     differenceInCalendarDays(contact.createdOn, Date.now());
  //   const ratio = daysIntoZone / contact.totalYellowZoneDays;
  // });

  // redZoneContacts.map(contact => {
  //   const daysIntoZone = contact.lastContactedDate ? 
  //     differenceInCalendarDays(contact.lastContactedDate, Date.now()) :
  //     differenceInCalendarDays(contact.createdOn, Date.now());
  //   const ratio = daysIntoZone / contact.totalRedZoneDays;
  // });

  // const sortedGreenZoneContacts = greenZoneContacts.sort((a, b) => {
  //     return new Date(b.)
  // });

  // const makeListItems = zone => {
  //   if(zone.length){
  //     return zone.map(contact => {
  //       return (
  //         <Link key={contact._id} to={`/contacts/${contact._id}`}>
  //           <li className={styles.commStatus}>
  //             <span>{contact.firstName} {contact.lastName}</span>
  //             {/* <span>{statusIcon}</span> */}
  //           </li>
  //         </Link>
  //       );
  //     });
  //   }
  // };

  // let greenZoners = makeListItems(sortedGreenZoneContacts);
  // let redZoners = makeListItems(sortedYellowZoneContacts);
  // let yellowZoners = makeListItems(sortedRedZoneContacts);
  // let pastDeadlineZoners = makeListItems(sortedPastDeadlineContacts);


  let contactList;
  if(contacts.length) {
    contactList = contacts.map(contact => {
      return (
        <Link key={contact._id} to={`/contacts/${contact._id}`}>
          <li className={styles.commStatus}>
            <span>{contact.firstName} {contact.lastName}</span>
            {/* <span>{statusIcon}</span> */}
          </li>
        </Link>);
    });
  }

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
