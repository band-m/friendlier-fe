import { login, logout, signup, signedIn } from './auth-actions';
import { LOGIN, LOGOUT, SIGNUP, SIGNED_IN } from '../action-types/action-types';

jest.mock('../../services/request.js');

describe('login actions', () => {
  it('creates a login action', () => {
    const action = login('test@test.horse', '1234');

    expect(action).toEqual({ 
      type: LOGIN,
      payload: Promise.resolve('email: test@test.horse')
    });
  });

  it('creates a logout action', () => {
    const action = logout();

    expect(action).toEqual({ 
      type: LOGOUT,
      payload: Promise.resolve()
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

  it('creates a signedIn action', () => {
    const action = signedIn();
    expect(action).toEqual({
      type: SIGNED_IN,
      payload: Promise.resolve('success')
    });
  });

  it('creates an updateUser action', () => {
    const body = { phoneNumber: '867-5309'};
    const action = updateUser(body);
    expect(action).toEqual({
      type: SIGNED_IN,
      payload: Promise.resolve(body);
    });
  });
});
