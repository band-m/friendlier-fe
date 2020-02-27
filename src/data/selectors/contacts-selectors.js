export const selectContactsLoading = state => state.contacts.contactsLoading;
export const selectContactsList = state => state.contacts.contactList;
export const selectSelectedContact = (state, id) =>
  selectContactsList(state).find(contact => contact._id === id);