import { getLogin, getSignup } from '../../services/auth/';
import { LOGIN, SIGNUP } from '../action-types/action-types';

export const login = (username) => ({
  type: LOGIN,
  payload: getLogin(username)
});

export const signup = ({ username, email, password }) => ({
  type: SIGNUP,
  payload: getSignup(username, email, password)
});



