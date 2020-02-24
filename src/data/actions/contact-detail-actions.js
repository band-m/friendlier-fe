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
  SET_NOTES
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

export const setContactDetails = contactDetails => {
  return {
    type: SET_CONTACT_DETAILS,
    payload: contactDetails
  };
};

export const setFirstName = firstName => {
  return {
    type: SET_FIRST_NAME,
    payload: firstName
  };
};

export const setLastName = lastName => {
  return {
    type: SET_LAST_NAME,
    payload: lastName
  };
};

export const setPhoneNumber = phoneNumber => {
  return {
    type: SET_PHONE_NUMBER,
    payload: phoneNumber
  };
};
