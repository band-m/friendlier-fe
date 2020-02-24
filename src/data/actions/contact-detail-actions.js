import {
  FETCH_CONTACT_DETAILS,
  SET_CONTACT_DETAILS,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE_NUMBER,
  SET_ADDRESS,
  SET_EMAIL,
  SET_IMAGE,
  SET_COMM_FREQUENCY,
  SET_BIRTHDATE,
  SET_SPECIAL_DATES,
  SET_NOTES,
  SET_LAST_CONTACTED,
  SET_YELLOW_ZONE,
  SET_RED_ZONE
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