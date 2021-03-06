import request from './request';

export const getLogin = (email, password) => 
  request('/api/v1/auth/login', 'POST', { email, password });

export const getLogout = () => 
  request('/api/v1/auth/logout');

export const getSignup = (displayName, email, password) => 
  request('/api/v1/auth/signup', 'POST', { displayName, email, password });

export const getSignedIn = () => 
  request('/api/v1/auth/signed-in');

export const patchUser = (patch) =>
  request('/api/v1/auth/update', 'PATCH', patch);


