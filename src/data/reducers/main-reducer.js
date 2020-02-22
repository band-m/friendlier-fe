import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import contactsReducer from './contacts-reducer';

export default combineReducers({
  auth: authReducer,
  contacts: contactsReducer
});
