import request from './request';

export const getContacts = userId => 
  request(`/api/v1/contacts/${userId}`);

export const getContactDetail = contactId =>
  request(`/api/v1/contacts/single/${contactId}`);

export const setContactDetails = body =>
  request('/api/v1/contacts', 'POST', body);

export const updateContactDetails = (contactId, body) => 
  request(`/api/v1/contacts/${contactId}`, 'PATCH', body);

export const deleteContactDetails = contactId => 
  request(`/api/v1/contacts/${contactId}`, 'DELETE');
