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
import {
  fetchContactDetails,
  setContactDetails,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setAddress,
  setEmail,
  setImage,
  setCommFrequency,
  setLastContacted,
  setBirthdate,
  setSpecialDates,
  setNotes
} from '../actions/contact-detail-actions';

jest.mock('../../services/contacts.js');

describe('contact detail actions', () => {
  it('should create a fetch contact detail action', () => {
    const dispatch = jest.fn();
    const action = fetchContactDetails();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CONTACT_DETAILS,
          payload: expect.any(Object)
        });
      });
  });
});
