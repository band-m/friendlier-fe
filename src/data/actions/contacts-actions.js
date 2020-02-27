import { FETCH_CONTACTS, SET_CONTACT, DELETE_CONTACT } from '../action-types/action-types';
import { getContacts } from '../../services/contacts';

export const fetchContacts = userId => ({
  type: FETCH_CONTACTS,
  payload: getContacts(userId)
});

export const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  payload: deleteContactDetail(contactId)
});

export const setContact = contactDetails => ({
  type: SET_CONTACT,
  payload: contactDetails
});
