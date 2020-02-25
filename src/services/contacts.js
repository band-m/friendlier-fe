import request from './request';

export const getContacts = () => 
  request('/api/v1/contacts');
export const getContactDetails = (contactId) => 
  request(`/api/v1/contacts/${contactId}`);
export const updateContactDetails = (contactId, body) => 
  request(`/api/v1/contacts/${contactId}`, 'PATCH', body);
export const deleteContactDetails = (contactId) => 
  request(`/api/v1/contacts/${contactId}`, 'DELETE');
  
