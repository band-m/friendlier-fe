// Nick's reducers for contact detail actions

import { SET_CONTACT_DETAILS, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_LAST_CONTACTED, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_CONNECTION_HISTORY } from '../action-types/action-types';

export const initialState={

  userId: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  email: '',
  image: '',
  commFrequency: 0,
  lastContacted: 0,
  yellowZone: 0,
  redZone: 0,
  connHistory: [],
  birthdate: null,
  specialDates: [],
  notes: '',
};

export const contactDetailReducer=(state=initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_IMAGE:
      return { ...state, image: action.payload };
    case SET_COMM_FREQUENCY:
      return { ...state, commFrequency: action.payload };
    case SET_LAST_CONTACTED:
      return { ...state, lastContacted: action.payload };
    case SET_BIRTHDATE:
      return { ...state, birthdate: action.payload };
    case SET_NOTES:
      return { ...state, notes: action.payload };
    case SET_YELLOW_ZONE:
      return { ...state, yellowZone: action.payload };
    case SET_RED_ZONE:
      return { ...state, redZone: action.payload };
    case SET_SPECIAL_DATES:
      return { ...state, specialDates: [...state.specialDates, action.payload] };
    case SET_CONNECTION_HISTORY:
      return { ...state, connectionHistory: [...state.connectionHistory, action.payload] };
    case SET_CONTACT_DETAILS:
      return {
        ...state,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
        email: action.payload.email,
        image: action.payload.image,
        commFrequency: action.payload.commFrequency,
        lastContacted: action.payload.lastContacted,
        yellowZone: action.payload.yellowZone,
        redZone: action.payload.redZone,
        connHistory: [...state.connectionHistory, action.payload.connectionHistory],
        birthdate: action.payload,
        specialDates: [...state.specialDates, action.payload.specialDates],
        notes: action.payload,
      };
  }
};
