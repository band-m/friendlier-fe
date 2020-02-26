import { FETCH_CONTACTS, SET_CONTACT_DETAILS, FETCH_ONE_CONTACT } from '../action-types/action-types';
import { getContacts, setContactDetails, getContactDetail } from '../../services/contacts';

export const fetchContacts = userId => dispatch => {
  return getContacts(userId)
    .then(details => {
      dispatch({
        type: FETCH_CONTACTS,
        payload: details
      });
    });
};

export const fetchOneContact = contactId => dispatch => {
  return getContactDetail(contactId)
    .then(detail => {
      dispatch({
        type: FETCH_ONE_CONTACT,
        payload: detail
      });
    });
};

export const postContactDetails = body => dispatch => {
  return setContactDetails(body)
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
