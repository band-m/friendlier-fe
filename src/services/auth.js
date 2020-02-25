import request from './request';

export const getLogin = (email, password) => 
  request('/api/v1/auth/login', 'POST', { email, password });

export const getSignup = (displayName, email, password) => 
  request('/api/v1/auth/signup', 'POST', { displayName, email, password });


