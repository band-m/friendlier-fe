import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../data/selectors/contacts-selectors';
import { fetchContacts } from '../../data/actions/contacts-actions';
import { selectUser, selectLoggedOut } from '../../data/selectors/auth-selector';
import styles from './ContactList.css';
import ConnectedButton from './ConnectedButton';

export default function ContactList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loggedOut = useSelector(selectLoggedOut);
  const history = useHistory();

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

  let contactList;
  if(contacts.length) {
    contactList = contacts.map(contact => {
      return (
        <Link key={contact._id} to={`/contacts/${contact._id}`}>
          <li className={styles.commStatus}>
            <span>{contact.firstName} {contact.lastName}</span>
            <ConnectedButton slider1={contact.slider1} slider2={contact.slider2} deadlineObject={contact.deadlineObject} id={contact._id} />
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
