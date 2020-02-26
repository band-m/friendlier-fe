import { FETCH_CONTACTS, SET_CONTACT, SET_CONTACTS } from '../action-types/action-types';
import { getContacts } from '../../services/contacts';

export const fetchContacts = userId => ({
  type: FETCH_CONTACTS,
  payload: getContacts(userId)
});

export const setContact = contactDetails => ({
  type: SET_CONTACT,
  payload: contactDetails
});

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts
});
