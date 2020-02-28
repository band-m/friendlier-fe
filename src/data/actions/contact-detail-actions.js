import { FETCH_CONTACTS, SET_CONTACT_DETAILS, FETCH_ONE_CONTACT } from '../action-types/action-types';
import { getContacts, setContactDetails, getContactDetail, updateContactDetails } from '../../services/contacts';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { setContact } from './contacts-actions';

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
  const detail = {
    ...body,
    totalGreenZoneDays: differenceInCalendarDays(body.yellowZoneStartDate, new Date()),
    totalYellowZoneDays: differenceInCalendarDays(body.redZoneStartDate, body.yellowZoneStartDate),
    totalRedZoneDays: differenceInCalendarDays(body.deadlineDate, body.redZoneStartDate)
  };
  return setContactDetails(detail)
    .then(contact => {
      dispatch({
        type: SET_CONTACT_DETAILS,
        payload: contact
      });
      dispatch(setContact(detail));
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
