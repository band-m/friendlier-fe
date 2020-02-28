import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';
import { fetchContacts } from '../../data/actions/contacts-actions';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { selectUser, selectLoggedOut } from '../../data/selectors/auth-selector';
import styles from './ContactList.css';
import { SET_CURRENT_ZONE_RATIO } from '../../data/action-types/action-types';
import { myAction } from '../../data/actions/contact-detail-actions';
import { Link } from 'react-router-dom';

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

  const greenZoneContacts = contacts.filter(contact => isFuture(new Date(contact.yellowZoneStartDate)));
  const yellowZoneContacts = contacts.filter(contact => isFuture(new Date(contact.redZoneStartDate)) && isPast(new Date(contact.yellowZoneStartDate)));
  const redZoneContacts = contacts.filter(contact => isFuture(new Date(contact.deadlineDate)) && isPast(new Date(contact.redZoneStartDate)));
  const overdueContacts = contacts.filter(contact => isPast(new Date(contact.redZoneStartDate)));

  useEffect(() => {
    greenZoneContacts.map(contact => {
      const daysIntoZone = contact.lastContactedDate ?
        differenceInCalendarDays(contact.lastContactedDate, Date.now()) :
        differenceInCalendarDays(contact.createdOn, Date.now());
      const ratio = daysIntoZone / contact.totalGreenZoneDays;
      dispatch(myAction(SET_CURRENT_ZONE_RATIO, ratio));
    });

    yellowZoneContacts.map(contact => {
      const daysIntoZone = contact.lastContactedDate ?
        differenceInCalendarDays(contact.yellowZoneStartDate, Date.now()) :
        differenceInCalendarDays(contact.yellowZoneStartDate, Date.now());
      const ratio = daysIntoZone / contact.totalYellowZoneDays;
      dispatch(myAction(SET_CURRENT_ZONE_RATIO, ratio));
    });

    redZoneContacts.map(contact => {
      const daysIntoZone = contact.lastContactedDate ?
        differenceInCalendarDays(contact.redZoneStartDate, Date.now()) :
        differenceInCalendarDays(contact.redZoneStartDate, Date.now());
      const ratio = daysIntoZone / contact.totalRedZoneDays;
      dispatch(myAction(SET_CURRENT_ZONE_RATIO, ratio));
    });
  }, []);

  const sortedGreen = greenZoneContacts.sort((a, b) => {
    a.zoneRatio - b.zoneRatio;
  });

  const sortedYellow = yellowZoneContacts.sort((a, b) => {
    a.zoneRatio - b.zoneRatio;
  });

  const sortedRed = redZoneContacts.sort((a, b) => {
    a.zoneRatio - b.zoneRatio;
  });

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

  let greenZoners = makeListItems(sortedGreen);
  let redZoners = makeListItems(sortedYellow);
  let yellowZoners = makeListItems(sortedRed);
  let overdueZoners = makeListItems(overdueContacts);

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
      {contacts && <ul>
        {overdueZoners}
        {redZoners}
        {yellowZoners}
        {greenZoners}
      </ul>}
      {!contacts && <p>Add your first contact to get started!</p>}
      <Link to='/add'>
        <button title="Add New Contact">+</button>
      </Link>
    </section>
  );
}
