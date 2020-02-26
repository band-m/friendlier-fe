import {
  FETCH_CONTACTS,
  SET_CONTACT_DETAILS,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE_NUMBER,
  SET_ADDRESS,
  SET_EMAIL,
  SET_IMAGE,
  SET_COMM_FREQUENCY,
  SET_BIRTHDATE,
  SET_SPECIAL_DATES,
  SET_NOTES,
  SET_LAST_CONTACTED,
  SET_YELLOW_ZONE,
  SET_RED_ZONE,
  FETCH_ONE_CONTACT
} from '../action-types/action-types';
import {
  fetchContacts,
  fetchOneContact,
  myAction
} from '../actions/contact-detail-actions';

jest.mock('../../services/contacts.js');

describe('contact detail actions', () => {
  it('should create a fetch contact detail action', () => {
    const dispatch = jest.fn();
    const action = fetchContacts();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CONTACTS,
          payload: [{
            _id: 'grouper',
            userId: 'userId',
            firstName: 'Billy',
            lastName: 'Boy',
            phoneNumber: 2168675309,
            address: '1234 Unpleasant Circle',
            email: 'test@test.com',
            image: 'ttttttt',
            commFrequency: 3,
            lastContacted: 10,
            birthdate: 'October 12, 1987',
            specialDates: null,
            notes: 'Grizzly Bears',
            __v: 0
          }]
        });
      });
  });

  it('creates a FETCH_ONE_CONTACT action', () => {
    const action = fetchOneContact();
    expect(action).toEqual({
      type: FETCH_ONE_CONTACT,
      payload: Promise.resolve({ userId: 'hi', firstName: 'Nick' })
    });
  });

  it('should create a set contact details action', () => {
    const action = myAction(SET_CONTACT_DETAILS, 'biscuits');

    expect(action).toEqual({
      type: SET_CONTACT_DETAILS,
      payload: 'biscuits'
    });
  });

  it('should create a set first name action', () => {
    const action = myAction(SET_FIRST_NAME, 'biscuits');

    expect(action).toEqual({
      type: SET_FIRST_NAME,
      payload: 'biscuits'
    });
  });

  it('should create a set last name action', () => {
    const action = myAction(SET_LAST_NAME, 'biscuits');

    expect(action).toEqual({
      type: SET_LAST_NAME,
      payload: 'biscuits'
    });
  });

  it('should create a set phone number action', () => {
    const action = myAction(SET_PHONE_NUMBER, 1234567890);

    expect(action).toEqual({
      type: SET_PHONE_NUMBER,
      payload: 1234567890
    });
  });


  it('should create a set address action', () => {
    const action = myAction(SET_ADDRESS, '1234 1st Ave');

    expect(action).toEqual({
      type: SET_ADDRESS,
      payload: '1234 1st Ave'
    });
  });

  it('should create a set email action', () => {
    const action = myAction(SET_EMAIL, 'test@test.com');

    expect(action).toEqual({
      type: SET_EMAIL,
      payload: 'test@test.com'
    });
  });

  it('should create a set image url action', () => {
    const action = myAction(SET_IMAGE, 'asdfasdf');

    expect(action).toEqual({
      type: SET_IMAGE,
      payload: 'asdfasdf'
    });
  });


  it('should create a set communication frequency action', () => {
    const action = myAction(SET_COMM_FREQUENCY, 5);

    expect(action).toEqual({
      type: SET_COMM_FREQUENCY,
      payload: 5
    });
  });

  it('should create a set birthdate action', () => {
    const action = myAction(SET_BIRTHDATE, 'January 2, 2020');

    expect(action).toEqual({
      type: SET_BIRTHDATE,
      payload: 'January 2, 2020'
    });
  });

  it('should create a set last contacted action', () => {
    const action = myAction(SET_LAST_CONTACTED, 'January 2, 2020');

    expect(action).toEqual({
      type: SET_LAST_CONTACTED,
      payload: 'January 2, 2020'
    });
  });

  it('should create a set special dates action', () => {
    const action = myAction(SET_SPECIAL_DATES, 'January 2, 2020');

    expect(action).toEqual({
      type: SET_SPECIAL_DATES,
      payload: 'January 2, 2020'
    });
  });

  it('should create a set last contacted action', () => {
    const action = myAction(SET_NOTES, 'string');

    expect(action).toEqual({
      type: SET_NOTES,
      payload: 'string'
    });
  });

  it('should create a set yellow zone action', () => {
    const action = myAction(SET_YELLOW_ZONE, 2);

    expect(action).toEqual({
      type: SET_YELLOW_ZONE,
      payload: 2
    });
  });

  it('should create a set red zone action', () => {
    const action = myAction(SET_RED_ZONE, 1);

    expect(action).toEqual({
      type: SET_RED_ZONE,
      payload: 1
    });
  });
});
