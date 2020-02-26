// Nick's reducers for contact detail actions

<<<<<<< HEAD
import { SET_USER_ID, SET_CONTACT_DETAILS, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_LAST_CONTACTED, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_CONNECTION_HISTORY, FETCH_ONE_CONTACT_PENDING, FETCH_ONE_CONTACT_FULFILLED, FETCH_ONE_CONTACT_REJECTED } from '../action-types/action-types';
=======
import { SET_USER_ID, SET_CONTACT_DETAILS, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_LAST_CONTACTED, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_CONNECTION_HISTORY, SET_NOTIFICATION_RANGE, SET_DEADLINE_DATE, SET_DEADLINE_OBJECT, SET_LAST_CONTACTED_DATE } from '../action-types/action-types';
>>>>>>> fd093fcec2e06d4ebea0cecc4dc9af379929be4b

const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  email: '',
  image: '',
  commFrequency: 1,
  lastContactedDate: 'Feb 1, 2020',
  notificationRange: 3,
  yellowZoneStartDate: 'Feb 20, 2020',
  redZoneStartDate: 'Feb 26, 2020',
  deadlineDate: 'March 1, 2020',
  deadlineObject: { 'days': 30 },
  connHistory: [],
  birthdate: null,
  specialDates: [],
  notes: '',
};

export default function contactDetailReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_ID:
      return { ...state, userId: action.payload };
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
    case SET_LAST_CONTACTED_DATE:
      return { ...state, lastContactedDate: action.payload };
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
      return { ...state };
<<<<<<< HEAD
    case FETCH_ONE_CONTACT_PENDING:
      return { ...state, contactsLoading: true, contactList: [], error: null };
    case FETCH_ONE_CONTACT_FULFILLED:
      return { ...state, contactsLoading: false, contactList: action.payload, error: null };
    case FETCH_ONE_CONTACT_REJECTED:
      return { ...state, contactsLoading: false, contactList: [], error: action.payload };
=======
    case SET_NOTIFICATION_RANGE:
      return { ...state, notificationRange: action.payload };
    case SET_DEADLINE_DATE:
      return { ...state, deadlineDate: action.payload };
    case SET_DEADLINE_OBJECT:
      return { ...state, deadlineObject: action.payload };
>>>>>>> fd093fcec2e06d4ebea0cecc4dc9af379929be4b
    default: return state;
  }
}
