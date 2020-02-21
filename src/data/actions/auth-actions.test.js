import { login, } from './auth-actions';
import { LOGIN, SIGNUP } from '../action-types/action-types';

jest.mock('../../services/auth.js');

describe('login actions', () => {
  it('creates a fetch user action', () => {
    const action = login('drmeloy', '1234');

    expect(action).toEqual({ 
      type: LOGIN,
      payload: Promise.resolve('path: /drmeloy')
    });
  });


  it('creates a signup action', () => {
    const body = {
      username: 'test',
      password: '1234',
      email: 'test@test.com'
    };
    const action = signUp(body);
    expect(action).toEqual({
      type: SIGNUP,
      payload: body
    });
  });
});
