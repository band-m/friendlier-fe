import { DELETE_CONTACT_FULFILLED, FETCH_CONTACTS_PENDING, FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED, SET_CONTACT, SET_CONTACT_DETAILS } from '../action-types/action-types';

export const initialState = { contactsLoading: false, contactList: [], error: null };

export default function contactsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CONTACTS_PENDING:
      return { ...state, contactsLoading: true, contactList: [], error: null };
    case FETCH_CONTACTS_FULFILLED:
      return { ...state, contactsLoading: false, contactList: action.payload, error: null };
    case FETCH_CONTACTS_REJECTED:
      return { ...state, contactsLoading: false, contactList: [], error: action.payload };
    case SET_CONTACT:
      return { ...state, contactList: [...state.contactList, action.payload] };
    case DELETE_CONTACT_FULFILLED:
      return { ...state, contactList: state.contactList.filter(contact => contact._id !== action.payload._id) };
    case SET_CONTACT_DETAILS:
      return { ...state, contactList: state.contactList.map(contact => {
        if(contact._id === action.payload._id) return action.payload;
        return contact;
      })};
    default: return state;
  }
}
