import { getLogin, getLogout, getSignup, getSignedIn } from '../../services/auth';
import { LOGIN, LOGOUT, SIGNUP, SIGNED_IN } from '../action-types/action-types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: getLogin(email, password)
});

export const logout = (email, password) => ({
  type: LOGOUT,
  payload: getLogout(email, password)
});

export const signup = (username, email, password) => ({
  type: SIGNUP,
  payload: getSignup(username, email, password)
});

export const signedIn = () => ({
  type: SIGNED_IN,
  payload: getSignedIn()
});
