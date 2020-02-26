import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import contactsReducer from './contacts-reducer';
import contactDetailReducer from './contact-detail-reducers';

export default combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  contactDetails: contactDetailReducer
});
