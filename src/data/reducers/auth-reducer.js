import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,
  LOGOUT_PENDING, LOGOUT_FULFILLED, LOGOUT_REJECTED,
  SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED, 
  SIGNED_IN_PENDING, SIGNED_IN_FULFILLED, SIGNED_IN_REJECTED,
  UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED } from '../action-types/action-types';

export const initialState = {
  loginLoading: false,
  logoutLoading: false,
  signUpLoading: false,
  signedInPending: false,
  loggedOut: false,
  user: null,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    // Note: middleware handles the unsuffixed actions for us, and gives us the other actions 
    case LOGIN_PENDING:
      return { ...state, loginLoading: true, user: null, error: null, loggedOut: false };
    case LOGIN_FULFILLED:
      return { ...state, loginLoading: false, user: action.payload, error: null };
    case LOGIN_REJECTED:
      return { ...state, loginLoading: false, user: null, error: action.payload };

    case LOGOUT_PENDING:
      return { ...state, logoutLoading: true, error: null };
    case LOGOUT_FULFILLED:
      return { ...state, logoutLoading: false, user: null, error: null, loggedOut: true };
    case LOGOUT_REJECTED:
      return { ...state, logoutLoading: false, error: action.payload };

    case SIGNUP_PENDING:
      return { ...state, signupLoading: true, user: null, error: null, loggedOut: false };
    case SIGNUP_FULFILLED:
      return { ...state, signupLoading: false, user: action.payload, error: null };
    case SIGNUP_REJECTED:
      return { ...state, signupLoading: false, user: null, error: action.payload };

    case SIGNED_IN_PENDING: 
      return { ...state, signedInLoading: true };
    case SIGNED_IN_FULFILLED: 
      return { ...state, signedInLoading: false, user: action.payload };
    case SIGNED_IN_REJECTED: 
      return { ...state, signedInLoading: false, loggedOut: true, error: action.payload };

    case UPDATE_USER_PENDING: 
      return { ...state, updateUserLoading: true, error: null };
    case UPDATE_USER_FULFILLED: 
      return { ...state, updateUserLoading: false, user: action.payload, error: null };
    case UPDATE_USER_REJECTED: 
      return { ...state, updateUserLoading: false, error: action.payload };

    default:
      return state;
  }
};
