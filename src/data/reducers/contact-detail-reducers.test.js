import { SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_LAST_CONTACTED, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_CONNECTION_HISTORY } from '../action-types/action-types';

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
      type: SET_LAST_CONTACTED,
      payload: 5
    };

    const initialState = { lastContacted: 1 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      lastContacted: 5
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
      payload: 2
    };

    const initialState = { yellowZone: 0 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      yellowZone: 2
    });
  });

  it('handles set redzone action', () => {
    const action = {
      type: SET_RED_ZONE,
      payload: 2
    };

    const initialState = { redZone: 0 };
    const newState = contactDetailReducer(initialState, action);
    expect(newState).toEqual({
      redZone: 2
    });
  });
});


// comm_frequency, set last contacted, set birthdate, set special dates, set notes, set yellow zone, set red zone, set connection history



// it('handles set special dates action', () => {
//   const action={
//     type: SET_SPECIAL_DATES,
//     payload: [{'January 1, 1980'}]
//   }

//   const initialState={ specialDates: []}
//   const newState=contactDetailReducer(initialState, action)
//   expect(newState).toEqual([{
//     'January 1, 1980'
//   }])
// })
