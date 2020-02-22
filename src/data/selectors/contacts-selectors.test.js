import { selectContactsLoading, selectContactsList } from './contacts-selectors';

describe('contacts-selectors', () => {
  it('selects the contacts loading state', () => {
    const state = {
      contacts: {
        contactsLoading: true,
        contactList: [],
        error: null
      }
    };
    const loading = selectContactsLoading(state);
    expect(loading).toEqual(true);
  });

  it('selects the contact list from state', () => {
    const state = {
      contacts: {
        contactsLoading: false,
        contactList: ['Kaladin', 'Dalinar'],
        error: null
      }
    };
    const contacts = selectContactsList(state);
    expect(contacts).toEqual(['Kaladin', 'Dalinar']);
  });
});
