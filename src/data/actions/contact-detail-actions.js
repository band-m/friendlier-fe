import { FETCH_CONTACT_DETAILS, SET_CONTACT_DETAILS } from '../action-types/action-types';
import { getContactDetails, setContactDetails } from '../../services/contacts';

export const fetchContactDetails = contactId => dispatch => {
  return getContactDetails(contactId)
    .then(details => {
      dispatch({
        type: FETCH_CONTACT_DETAILS,
        payload: details
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
