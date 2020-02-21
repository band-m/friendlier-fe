import { login, signup } from './auth-actions';
import { LOGIN, SIGNUP } from '../action-types/action-types';

jest.mock('../../services/auth.js');

describe('login actions', () => {
  it('creates a login action', () => {
    const action = login('test@test.horse', '1234');

    expect(action).toEqual({ 
      type: LOGIN,
      payload: Promise.resolve('email: test@test.horse')
    });
  });

  it('creates a signup action', () => {
    const body = {
      username: 'test',
      password: '1234',
      email: 'test@test.com'
    };
    const action = signup(body);
    expect(action).toEqual({
      type: SIGNUP,
      payload: Promise.resolve(body)
    });
  });
});
