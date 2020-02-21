import { fetchUser, LOGIN, setLogin, SET_LOGIN } from './loginActions';

jest.mock('../../services/auth.js');

describe('login actions', () => {
  it('creates a fetch user action', () => {
    const action = fetchUser('drmeloy', '1234');

    expect(action).toEqual({ 
      type: FETCH_USER,
      payload: Promise.resolve('path: /drmeloy')
    });
  });
  it('creates a setLogin action', () => {
    const action = setLogin(true);
    expect(action).toEqual({
      type: SET_LOGIN,
      payload: true
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
      type: SIGN_UP,
      payload: body
    });
  });
});
