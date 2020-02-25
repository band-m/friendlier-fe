import { SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_LAST_CONTACTED, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_CONNECTION_HISTORY } from '../action-types/action-types';

import { contactDetailReducer } from './contact-detail-reducers';
// SET_CONTACT_DETAILS

describe('contact detail reducer', () => {
  it('handles the set first name action', () => {
    const action = {
      type: SET_FIRST_NAME,
      payload: { firstName: 'Ben' }
    };
    const initialState = {
      firstName: ''
    };
    const newState = contactDetailReducer(initialState, action);

    expect(newState).toEqual({
      firstName: { firstName: 'Ben' }
    });
  });


  it('handles set last name action', () => {
    const action = {
      type: SET_LAST_NAME,
      payload: { lastName: 'John' }
    };

    const initialState = {
      lastName: ''
    };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      lastName: { lastName: 'John' }
    });
  });

  it('handles set phone number action', () => {
    const action = {
      type: SET_PHONE_NUMBER,
      payload: { phoneNumber: '867-3509' }
    };

    const initialState = {
      phoneNumber: null
    };

    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      phoneNumber: { phoneNumber: '867-3509' }
    });
  });
});
