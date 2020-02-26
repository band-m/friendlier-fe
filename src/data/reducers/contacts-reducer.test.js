import { FETCH_CONTACTS, FETCH_CONTACTS_PENDING, FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED } from '../action-types/action-types';
import contactsReducer, { initialState } from './contacts-reducer';

jest.mock('../../services/contacts.js');

describe('contact-reducer', () => {
  it('returns state on unrecognized action', () => {
    expect(contactsReducer(initialState, { type: 'INFUSE_STORMLIGHT', payload: '5 diamond chits' })).toEqual(initialState);
  });

  it('does nothing with FETCH_CONTACTS', () => {
    expect(contactsReducer(initialState, { type: FETCH_CONTACTS, payload: 'Storm father' })).toEqual(initialState);
  });

  it('handles a FETCH_CONTACTS_PENDING action', () => {
    expect(contactsReducer(initialState, { type: FETCH_CONTACTS_PENDING, payload: 'promise pending' })).toEqual({ ...initialState, contactsLoading: true, contactList: [], error: null });
  });

  it('handles a FETCH_CONTACTS_FULFILLED action', () => {
    expect(contactsReducer(initialState, { type: FETCH_CONTACTS_FULFILLED, payload: 'promise fulfilled' })).toEqual({ ...initialState, contactsLoading: false, contactList: 'promise fulfilled', error: null });
  });

  it('handles a FETCH_CONTACTS_REJECTED action', () => {
    expect(contactsReducer(initialState, { type: FETCH_CONTACTS_REJECTED, payload: 'promise rejected' })).toEqual({ ...initialState, contactsLoading: false, contactList: [], error: 'promise rejected' });
  });
});
