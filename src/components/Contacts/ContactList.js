import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';
import { fetchContacts } from '../../data/actions/contacts-actions';
<<<<<<< HEAD
import { selectUser } from '../../data/selectors/auth-selector';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
=======
import { selectUser, selectLoggedOut } from '../../data/selectors/auth-selector';
>>>>>>> 32793f2cc23387afdce43965bc361a2905cb94ce
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

<<<<<<< HEAD
  const greenZoneContacts = contacts.filter(contact => isFuture(contact.yellowZoneStartDate));
  const yellowZoneContacts = contacts.filter(contact => isFuture(contact.redZoneStartDate));
  const redZoneContacts = contacts.filter(contact => isFuture(contact.deadlineDate));
  const pastDeadlineContacts = contacts.filter(contact => isPast(contact.deadlineDate));

  greenZoneContacts.map(contact => {
    let greenZoneTime;
    if(contact.lastContactedDate){
      greenZoneTime = formatDistanceStrict(contact.createdOn, contact.yellowZoneStartDate);
    }
    greenZoneTime = formatDistanceStrict(contact.lastContactedDate, contact.yellowZoneStartDate);
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
=======
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
>>>>>>> 32793f2cc23387afdce43965bc361a2905cb94ce

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
