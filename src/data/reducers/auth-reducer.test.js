import { authReducer, initialState } from './auth-reducer';
import { LOGIN, LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, 
  SIGNUP, SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED} from '../action-types/action-types';

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
});