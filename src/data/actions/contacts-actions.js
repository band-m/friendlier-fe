import { FETCH_CONTACTS } from '../action-types/action-types';
import { getContacts } from '../../services/contacts';

export const fetchContacts = userId => ({
  type: FETCH_CONTACTS,
  payload: getContacts(userId)
});
