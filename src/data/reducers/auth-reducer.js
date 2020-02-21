import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, 
  SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED } from '../action-types/action-types';

export const initialState = {
  loginLoading: false,
  signUpLoading: false,
  user: null,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    // Note: middleware handles LOGIN and SIGNUP for us, and gives us the other actions 
    case LOGIN_PENDING:
      return { ...state, loginLoading: true, user: null, error: null,  };
    case LOGIN_FULFILLED:
      return { ...state, loginLoading: false, user: action.payload, error: null };
    case LOGIN_REJECTED:
      return { ...state, loginLoading: false, user: null, error: action.payload };
    case SIGNUP_PENDING:
      return { ...state, signUpLoading: true, user: null, error: null,  };
    case SIGNUP_FULFILLED:
      return { ...state, signUpLoading: false, user: action.payload, error: null };
    case SIGNUP_REJECTED:
      return { ...state, signUpLoading: false, user: null, error: action.payload };


    default:
      return state;
  }
};
