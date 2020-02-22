import { getLogin, getSignup } from '../../services/auth/';
import { LOGIN, SIGNUP } from '../action-types/action-types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: getLogin(email, password)
});

export const signup = ({ username, email, password }) => ({
  type: SIGNUP,
  payload: getSignup(username, email, password)
});



