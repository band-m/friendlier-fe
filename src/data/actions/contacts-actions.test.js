import { FETCH_CONTACTS, SET_CONTACTS } from '../action-types/action-types';
import { fetchContacts, setContacts } from './contacts-actions';

jest.mock('../../services/contacts.js');

describe('contact-actions', () => {
  it('creates a FETCH_CONTACTS action', () => {
    const action = fetchContacts('Kholin');
    expect(action).toEqual({
      type: FETCH_CONTACTS,
      payload: Promise.resolve(['Dalinar', 'Kaladin'])
    });
  });

  it('creates a SET_CONTACTS action', () => {
    const action = setContacts(['Dalinar', 'Kaladin']);
    expect(action).toEqual({
      type: SET_CONTACTS,
      payload: ['Dalinar', 'Kaladin']
    });
  });
});
