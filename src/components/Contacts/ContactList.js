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

  const overdueContacts = contacts.filter(contact => isPast(new Date(contact.deadlineDate)));
  const redZoneContacts = contacts.filter(contact => !isPast(new Date(contact.deadlineDate)) && isPast(new Date(contact.redZoneStartDate)));
  const yellowZoneContacts = contacts.filter(contact => !isPast(new Date(contact.redZoneStartDate)) && isPast(new Date(contact.yellowZoneStartDate)));
  const greenZoneContacts = contacts.filter(contact => !isPast(new Date(contact.yellowZoneStartDate)));

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

  const makeListItems = (zone, backgroundColor, color) => {
    if(zone.length){
      return zone.map(contact => {
        return (
          <Link key={contact._id} to={`/contacts/${contact._id}`}>
            <li className={`styles.${zone}`}>    {/* this doesn't seem to work, is there a way to do this? */}
              <div></div>
              <span>{contact.firstName} {contact.lastName}</span>
              {/* <span>{statusIcon}</span> */}
            </li>
          </Link>
        );
      });
    }
  };

  let greenZoners = makeListItems(sortedGreen, '#64cf73', '#0a0a0a');
  let redZoners = makeListItems(sortedYellow, '#ffe745', '#0a0a0a');
  let yellowZoners = makeListItems(sortedRed, '#e24b1c', '#0a0a0a');
  let overdueZoners = makeListItems(overdueContacts, '#000000', '#ffffff');

  return (
    <section className={styles.ContactList}>
      <h2>Contact List</h2>
      <hr style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: .1,
        width: '25vw',
        borderColor: '#0e4375'
      }}/>
      {contacts && <ul className={styles.ContactList}>
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
