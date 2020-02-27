import { FETCH_CONTACTS, SET_CONTACT_DETAILS, FETCH_ONE_CONTACT, E } from '../action-types/action-types';
import { getContacts, setContactDetails, getContactDetail, updateContactDetails } from '../../services/contacts';

export const fetchContacts = userId => dispatch => {
  return getContacts(userId)
    .then(details => {
      dispatch({
        type: FETCH_CONTACTS,
        payload: details
      });
    });
};

export const fetchOneContact = contactId => ({
  type: FETCH_ONE_CONTACT,
  payload: getContactDetail(contactId)
});

export const postContactDetails = body => dispatch => {
  return setContactDetails(body)
    .then(contact => {
      dispatch({
        type: SET_CONTACT_DETAILS,
        payload: contact
      });
    });
};

export const editContactDetails = (id, body) => dispatch => {
  return updateContactDetails(id, body)
    .then(contact => {
      dispatch({
        type: SET_CONTACT_DETAILS,
        payload: contact
      });
    });
};

export const myAction = (type, payload) => ({
  type,
  payload
});
