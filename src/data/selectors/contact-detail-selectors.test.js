import { selectContactDetails, selectFormData } from './contact-detail-selectors';

describe('contact details selectors', () => {
  it('should select contact details', () => {
    const state = {
      contactDetail: {
        userId: 'lhsbkj26785iygkfuyi',
        firstName: 'Norma',
        lastName: 'Sass',
        phoneNumber: '216-456-7890',
        address: '1923 Dingaling way',
        email: 'test@test.com',
        commFrequency: 60,
        lastContacted: 15,
        birthdate: '2020-03-20T13:34:00.000',
        notes: 'This is a note',
      }
    };

    expect(selectContactDetails(state)).toEqual({
      userId: 'lhsbkj26785iygkfuyi',
      firstName: 'Norma',
      lastName: 'Sass',
      phoneNumber: '216-456-7890',
      address: '1923 Dingaling way',
      email: 'test@test.com',
      commFrequency: 60,
      lastContacted: 15,
      birthdate: '2020-03-20T13:34:00.000',
      notes: 'This is a note',
    });
  });
});
