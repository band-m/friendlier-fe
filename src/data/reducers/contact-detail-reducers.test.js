import {
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
  SET_YELLOW_ZONE,
  SET_RED_ZONE,
  SET_CONNECTION_HISTORY,
  SET_LAST_CONTACTED_DATE,
  SET_NOTIFICATION_RANGE,
  SET_DEADLINE_DATE,
  SET_DEADLINE_OBJECT,
  SET_CONTACT_CREATED_ON,
  SET_DEADLINE_UNIT,
  SET_DEADLINE_NUMBER,
  SET_SLIDER_1,
  SET_SLIDER_2,
  CLEAR_CONTACT_DETAILS
} from '../action-types/action-types';

import contactDetailReducer from './contact-detail-reducers';
// SET_CONTACT_DETAILS

describe('contact detail reducer', () => {
  it('handles the set first name action', () => {
    const action = {
      type: SET_FIRST_NAME,
      payload: 'Ben'
    };
    const initialState = {
      firstName: ''
    };
    const newState = contactDetailReducer(initialState, action);

    expect(newState).toEqual({
      firstName: 'Ben'
    });
  });


  it('handles set last name action', () => {
    const action = {
      type: SET_LAST_NAME,
      payload: 'John'
    };

    const initialState = {
      lastName: ''
    };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      lastName: 'John'
    });
  });

  it('handles set phone number action', () => {
    const action = {
      type: SET_PHONE_NUMBER,
      payload: '867-5309'
    };

    const initialState = {
      phoneNumber: null
    };

    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      phoneNumber: '867-5309'
    });
  });

  it('handles set address function', () => {
    const action = {
      type: SET_ADDRESS,
      payload: '1234 1st St.'
    };

    const initialState = { address: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      address: '1234 1st St.'
    });
  });

  it('handles set email action', () => {
    const action = {
      type: SET_EMAIL,
      payload: 'test@test.com'
    };

    const initialState = { email: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      email: 'test@test.com'
    });
  });

  it('handles set communication frequency', () => {
    const action = {
      type: SET_COMM_FREQUENCY,
      payload: 2
    };

    const initialState = { commFrequency: 1 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      commFrequency: 2
    });
  });

  it('handles set last contacted action', () => {
    const action = {
      type: SET_LAST_CONTACTED_DATE,
      payload: 'Sept 2 2020'
    };

    const initialState = { lastContactedDate: 'August 20 2020', connHistory: ['July 4 2020', 'August 20 2020'] };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      lastContactedDate: 'Sept 2 2020',
      connHistory: ['July 4 2020', 'August 20 2020', 'Sept 2 2020']
    });
  });

  it('handles set birthdate action', () => {
    const action = {
      type: SET_BIRTHDATE,
      payload: 'January 1, 1980'
    };

    const initialState = { birthdate: 'February 10, 2020' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      birthdate: 'January 1, 1980'
    });
  });

  it('handles set notes action', () => {
    const action = {
      type: SET_NOTES,
      payload: 'here are my notes'
    };

    const initialState = { notes: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      notes: 'here are my notes'
    });
  });

  it('handles set yellow zone action', () => {
    const action = {
      type: SET_YELLOW_ZONE,
      payload: 'Sept 2 2020'
    };

    const initialState = { yellowZoneStartDate: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({ yellowZoneStartDate: 'Sept 2 2020' });
  });

  it('handles set redzone action', () => {
    const action = {
      type: SET_RED_ZONE,
      payload: 'Sept 2 2020'
    };

    const initialState = { redZoneStartDate: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      redZoneStartDate: 'Sept 2 2020'
    });
  });

  it('handles set notification range action', () => {
    const action = {
      type: SET_NOTIFICATION_RANGE,
      payload: 2
    };

    const initialState = { notificationRange: 1 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      notificationRange: 2
    });
  });

  it('handles set deadline date action', () => {
    const action = {
      type: SET_DEADLINE_DATE,
      payload: 'Sept 2, 2020'
    };

    const initialState = { deadlineDate: 'March 1, 2020' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      deadlineDate: 'Sept 2, 2020'
    });
  });

  it('handles set deadline object action', () => {
    const action = {
      type: SET_DEADLINE_OBJECT,
      payload: { 'months': 3 }
    };

    const initialState = { deadlineObject: { 'days': 3 } };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      deadlineObject: { 'months': 3 }
    });
  });

  it('handles set contact created on action', () => {
    const action = {
      type: SET_CONTACT_CREATED_ON,
      payload: 'Sept 2 2020'
    };

    const initialState = { createdOn: '' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      createdOn: 'Sept 2 2020'
    });
  });

  it('handles set deadline unit action', () => {
    const action = {
      type: SET_DEADLINE_UNIT,
      payload: 'months'
    };

    const initialState = { deadlineUnit: 'weeks' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({ deadlineUnit: 'months' });
  });

  it('handles set deadline number action', () => {
    const action = {
      type: SET_DEADLINE_NUMBER,
      payload: 3
    };

    const initialState = { deadlineNumber: 1 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({ deadlineNumber: 3 });
  });

  it('handles set slider 1 action', () => {
    const action = {
      type: SET_SLIDER_1,
      payload: 15
    };

    const initialState = { slider1: 10 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({ slider1: 15 });
  });

  it('handles set slider 2 action', () => {
    const action = {
      type: SET_SLIDER_2,
      payload: 15
    };

    const initialState = { slider2: 10 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({ slider2: 15 });
  });

  it('handles a clear contact details action', () => {
    const action = {
      type: CLEAR_CONTACT_DETAILS
    };

    const initialState = { userId: 12345, firstName: 'Dan', lastName: 'Meloy' };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      userId: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      email: '',
      image: '',
      commFrequency: 1,
      createdOn: null,
      lastContactedDate: null,
      notificationRange: 3,
      slider1: 0,
      slider2: 0,
      yellowZoneStartDate: null,
      redZoneStartDate: null,
      deadlineDate: null,
      deadlineObject: {},
      connHistory: [],
      birthdate: '',
      specialDates: [],
      notes: '',
    });
  });
});
