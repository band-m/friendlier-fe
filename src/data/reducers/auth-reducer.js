import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, 
  SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED, 
  SIGNED_IN_PENDING, SIGNED_IN_FULFILLED, SIGNED_IN_REJECTED } from '../action-types/action-types';

export const initialState = {
  loginLoading: false,
  signUpLoading: false,
  signedInPending: false,
  user: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    // Note: middleware handles the unsuffixed actions for us, and gives us the other actions 
    case LOGIN_PENDING:
      return { ...state, loginLoading: true, user: null, error: null,  };
    case LOGIN_FULFILLED:
      return { ...state, loginLoading: false, user: action.payload, error: null };
    case LOGIN_REJECTED:
      return { ...state, loginLoading: false, user: null, error: action.payload };
    case SIGNUP_PENDING:
      return { ...state, signupLoading: true, user: null, error: null };
    case SIGNUP_FULFILLED:
      return { ...state, signupLoading: false, user: action.payload, error: null };
    case SIGNUP_REJECTED:
      return { ...state, signupLoading: false, user: null, error: action.payload };
    case SIGNED_IN_PENDING: 
      return { ...state, signedInLoading: true };
    case SIGNED_IN_FULFILLED: 
      return { ...state, signedInLoading: false, user: action.payload };
    case SIGNED_IN_REJECTED: 
      return { ...state, signedInLoading: false };

    default:
      return state;
  }
};
