import { login } from '../../services/auth/';

export const LOGIN = 'LOGIN';
export const fetchUser = (username) => ({
  type: LOGIN,
  payload: login(username)
});
export const SET_LOGIN = 'SET_LOGIN';
export const setLogin = (bool) => ({
  type: SET_LOGIN,
  payload: bool
});

export const SIGN_UP = 'SIGN_UP';
export const signUp = ({ username, email, password }) => ({
  type: SIGN_UP,
  paylod: signUp(username, email, password)
});



