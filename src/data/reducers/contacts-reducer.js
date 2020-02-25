import { FETCH_CONTACTS_PENDING, FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED } from '../action-types/action-types';

export const initialState = { contactsLoading: false, contactList: [], error: null };

export default function contactsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CONTACTS_PENDING:
      return { ...state, contactsLoading: true, contactList: [], error: null };
    case FETCH_CONTACTS_FULFILLED:
      return { ...state, contactsLoading: false, contactList: action.payload, error: null };
    case FETCH_CONTACTS_REJECTED:
      return { ...state, contactsLoading: false, contactList: [], error: action.payload };
    default:
      return state;
  }
}
