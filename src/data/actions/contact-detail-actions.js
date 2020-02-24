import {
  FETCH_CONTACT_DETAILS,
} from '../action-types/action-types';
import { getContactDetails } from '../../services/contacts';

export const fetchContactDetails = contactId => dispatch => {
  return getContactDetails(contactId)
    .then(details => {
      dispatch({
        type: FETCH_CONTACT_DETAILS,
        payload: details
      });
    });
};


export const myAction = (type, payload) => {
  return {
    type,
    payload
  };
}
  ;
