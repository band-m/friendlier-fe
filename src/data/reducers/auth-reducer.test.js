import { authReducer, initialState } from './auth-reducer';
import {
  LOGIN, LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,
  LOGOUT, LOGOUT_PENDING, LOGOUT_FULFILLED, LOGOUT_REJECTED,
  SIGNUP, SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED,
  SIGNED_IN, SIGNED_IN_PENDING, SIGNED_IN_FULFILLED, SIGNED_IN_REJECTED,
  UPDATE_USER, UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED
} from '../action-types/action-types';

const loggedInState = { ...initialState, user: 'user data' };

describe('auth reducer module', () => {
  it('LOGIN does nothing', () => {
    expect(authReducer(initialState, { type: LOGIN, payload: 'fake promise' }))
      .toEqual(initialState);
  });

  it('LOGIN_PENDING sets loginLoading, unsets user and error', () => {
    expect(authReducer(initialState, { type: LOGIN_PENDING }))
      .toEqual({ ...initialState, loginLoading: true, user: null, error: null });
  });

  it('LOGIN_FULFILLED unsets loginLoading and error, sets user', () => {
    expect(authReducer(initialState, { type: LOGIN_FULFILLED, payload: 'user data' }))
      .toEqual({ ...initialState, loginLoading: false, user: 'user data', error: null });
  });

  it('LOGIN_REJECTED unsets loginLoading and user, sets error', () => {
    expect(authReducer(initialState, { type: LOGIN_REJECTED, payload: 'error data' }))
      .toEqual({ ...initialState, loginLoading: false, user: null, error: 'error data' });
  });

  it('LOGOUT does nothing', () => {
    expect(authReducer(loggedInState, { type: LOGOUT, payload: 'fake promise' }))
      .toEqual(loggedInState);
  });

  it('LOGOUT_PENDING sets logoutLoading, unsets error', () => {
    expect(authReducer(loggedInState, { type: LOGOUT_PENDING }))
      .toEqual({ ...loggedInState, logoutLoading: true, error: null });
  });

  it('LOGOUT_FULFILLED unsets logoutLoading, error, and user', () => {
    expect(authReducer(loggedInState, { type: LOGOUT_FULFILLED }))
      .toEqual({ ...loggedInState, logoutLoading: false, user: null, error: null, loggedOut: true });
  });

  it('LOGOUT_REJECTED unsets logoutLoading, sets error', () => {
    expect(authReducer(loggedInState, { type: LOGOUT_REJECTED, payload: 'error data' }))
      .toEqual({ ...loggedInState, logoutLoading: false, error: 'error data' });
  });

  it('SIGNUP does nothing', () => {
    expect(authReducer(initialState, { type: SIGNUP, payload: 'fake promise' }))
      .toEqual(initialState);
  });

  it('SIGNUP_PENDING sets signupLoading, unsets user and error', () => {
    expect(authReducer(initialState, { type: SIGNUP_PENDING }))
      .toEqual({ ...initialState, signupLoading: true, user: null, error: null });
  });

  it('SIGNUP_FULFILLED unsets signupLoading and error, sets user', () => {
    expect(authReducer(initialState, { type: SIGNUP_FULFILLED, payload: 'user data' }))
      .toEqual({ ...initialState, signupLoading: false, user: 'user data', error: null });
  });

  it('SIGNUP_REJECTED unsets signupLoading and user, sets error', () => {
    expect(authReducer(initialState, { type: SIGNUP_REJECTED, payload: 'error data' }))
      .toEqual({ ...initialState, signupLoading: false, user: null, error: 'error data' });
  });

  it('SIGNED_IN does nothing', () => {
    expect(authReducer(initialState, { type: SIGNED_IN, payload: 'fake promise' }))
      .toEqual(initialState);
  });

  it('SIGNED_IN_PENDING sets signedInLoading, unsets error', () => {
    expect(authReducer(initialState, { type: SIGNED_IN_PENDING }))
      .toEqual({ ...initialState, signedInLoading: true, error: null });
  });

  it('SIGNED_IN_FULFILLED unsets signedInLoading and error, sets user', () => {
    expect(authReducer(initialState, { type: SIGNED_IN_FULFILLED, payload: 'user data' }))
      .toEqual({ ...initialState, signedInLoading: false, user: 'user data', error: null });
  });

  it('SIGNED_IN_REJECTED unsets signedInLoading and user, sets error', () => {
    expect(authReducer(initialState, { type: SIGNED_IN_REJECTED, payload: 'error data' }))
      .toEqual({ ...initialState, signedInLoading: false, user: null, loggedOut: true, error: 'error data' });
  });

  it('UPDATE_USER does nothing', () => {
    expect(authReducer(loggedInState, { type: UPDATE_USER, payload: 'fake promise' }))
      .toEqual(loggedInState);
  });

  it('UPDATE_USER_PENDING sets updateUserLoading', () => {
    expect(authReducer(loggedInState, { type: UPDATE_USER_PENDING }))
      .toEqual({ ...loggedInState, updateUserLoading: true });
  });

  it('UPDATE_USER_FULFILLED unsets updateUserLoading and error, sets user', () => {
    expect(authReducer(loggedInState, { type: UPDATE_USER_FULFILLED, payload: 'user data' }))
      .toEqual({ ...loggedInState, updateUserLoading: false, user: 'user data', error: null });
  });

  it('UPDATE_USER_REJECTED unsets updateUserLoading, sets error', () => {
    expect(authReducer(loggedInState, { type: UPDATE_USER_REJECTED, payload: 'error data' }))
      .toEqual({ ...loggedInState, updateUserLoading: false, error: 'error data' });
  });

});
