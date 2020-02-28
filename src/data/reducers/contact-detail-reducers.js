// Nick's reducers for contact detail actions

import { SET_USER_ID, SET_CONTACT_DETAILS, SET_FIRST_NAME, SET_LAST_NAME, SET_PHONE_NUMBER, SET_ADDRESS, SET_EMAIL, SET_IMAGE, SET_COMM_FREQUENCY, SET_BIRTHDATE, SET_SPECIAL_DATES, SET_NOTES, SET_YELLOW_ZONE, SET_RED_ZONE, SET_NOTIFICATION_RANGE, SET_DEADLINE_DATE, SET_DEADLINE_OBJECT, SET_LAST_CONTACTED_DATE, SET_CONTACT_CREATED_ON, SET_DEADLINE_UNIT, SET_DEADLINE_NUMBER, SET_SLIDER_1, SET_SLIDER_2, CLEAR_CONTACT_DETAILS, SET_TOTAL_GREEN_ZONE_DAYS, SET_TOTAL_YELLOW_ZONE_DAYS, SET_TOTAL_RED_ZONE_DAYS, SET_CURRENT_ZONE_RATIO } from '../action-types/action-types';

const initialState = {
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
  totalGreenZoneDays: null,
  totalYellowZoneDays: null,
  totalRedZoneDays: null,
  currentZoneRatio: 5,
  deadlineDate: null,
  deadlineObject: {},
  connHistory: [],
  birthdate: '',
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
      return { ...state, lastContactedDate: action.payload, connHistory: [...state.connHistory, action.payload] };
    case SET_BIRTHDATE:
      return { ...state, birthdate: action.payload };
    case SET_NOTES:
      return { ...state, notes: action.payload };
    case SET_YELLOW_ZONE:
      return { ...state, yellowZoneStartDate: action.payload };
    case SET_RED_ZONE:
      return { ...state, redZoneStartDate: action.payload };
    case SET_TOTAL_GREEN_ZONE_DAYS:
      return { ...state, totalGreenZoneDays: action.payload };
    case SET_TOTAL_YELLOW_ZONE_DAYS:
      return { ...state, totalYellowZoneDays: action.payload };
    case SET_TOTAL_RED_ZONE_DAYS:
      return { ...state, totalRedZoneDays: action.payload };
    case SET_CURRENT_ZONE_RATIO:
      return { ...state, currentZoneRatio: action.payload };
    case SET_SPECIAL_DATES:
      return { ...state, specialDates: [...state.specialDates, action.payload] };
    case SET_CONTACT_DETAILS:
      return { ...action.payload };
    case SET_NOTIFICATION_RANGE:
      return { ...state, notificationRange: action.payload };
    case SET_DEADLINE_DATE:
      return { ...state, deadlineDate: action.payload };
    case SET_DEADLINE_OBJECT:
      return { ...state, deadlineObject: action.payload };
    case SET_CONTACT_CREATED_ON:
      return { ...state, createdOn: action.payload };
    case SET_DEADLINE_UNIT:
      return { ...state, deadlineUnit: action.payload };
    case SET_DEADLINE_NUMBER:
      return { ...state, deadlineNumber: action.payload };
    case SET_SLIDER_1:
      return { ...state, slider1: action.payload };
    case SET_SLIDER_2:
      return { ...state, slider2: action.payload };
    case CLEAR_CONTACT_DETAILS:
      return { ...initialState };
    default: return state;
  }
}
