import { getLogin, getSignup, getSignedIn } from '../../services/auth';
import { LOGIN, SIGNUP, SIGNED_IN } from '../action-types/action-types';

export const login = (email, password) => ({
  type: LOGIN,
  payload: getLogin(email, password)
});

export const signup = (username, email, password) => ({
  type: SIGNUP,
  payload: getSignup(username, email, password)
});

export const signedIn = () => ({
  type: SIGNED_IN,
  payload: getSignedIn()
});
