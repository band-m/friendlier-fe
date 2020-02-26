export const getContacts = () => Promise.resolve([{
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
}]);

export const getContactDetail = () => Promise.resolve({
  _id: 'contactId',
  userId: 'frogs',
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
});
