import { selectUser, selectError, selectLoading } from './auth-selector.js';

let state;
beforeEach(() => {
  state = {
    auth: {
      signupLoading: true,
      loginLoading: false,
      user: 'user data',
      error: 'error data'
    }
  };
});

describe('Auth Selector Module', () => {
  it('selectUser returns the user', () => {
    expect(selectUser(state)).toEqual('user data');
  });

  it('selectError returns the error', () => {
    expect(selectError(state)).toEqual('error data');
  });

  it('selectLoading returns whether we\'re loading', () => {
    expect(selectLoading(state)).toEqual(true);
  });
});
