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
          payload: {
            userId: 'ljdgckxjdgckjhey586',
            firstName: 'Billy',
            lastName: 'Boy',
            phoneNumber: 2168675309,
            address: '1234 Unpleasant Circle',
            email: 'test@test.com',
            image: 'ttttttt',
            commFrequency: 3,
            lastContacted: 10,
            birthdate: 'October 12, 1987',
            specialDates: null,
            notes: 'Grizzly Bears'
          }
        });
      });
  });

  it('should create a set contact details action', () => {
    const action = setContactDetails('biscuits');

    expect(action).toEqual({
      type: SET_CONTACT_DETAILS,
      payload: 'biscuits'
    });
  });

  it('should create a set first name action', () => {
    const action = setFirstName('biscuits');

    expect(action).toEqual({
      type: SET_FIRST_NAME,
      payload: 'biscuits'
    });
  });

  it('should create a set last name action', () => {
    const action = setLastName('biscuits');

    expect(action).toEqual({
      type: SET_LAST_NAME,
      payload: 'biscuits'
    });
  });

  it('should create a set phone number action', () => {
    const action = setPhoneNumber(1234567890);

    expect(action).toEqual({
      type: SET_PHONE_NUMBER,
      payload: 1234567890
    });
  });
});
