import { FETCH_CONTACTS } from '../action-types/action-types';
import { fetchContacts } from './contact-actions';

jest.mock('../../services/contacts.js');

describe('contact-actions', () => {
  it('creates a FETCH_CONTACTS action', () => {
    const action = fetchContacts('Kholin');
    expect(action).toEqual({
      type: FETCH_CONTACTS,
      payload: Promise.resolve(['Dalinar', 'Kaladin'])
    });
  });
});
