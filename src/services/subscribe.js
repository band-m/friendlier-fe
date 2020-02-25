import request from './request';

export const postSubscription = (subscription) => 
  request('/api/v1/subscribe/', 'POST', subscription);
