jest.mock('react-redux', () => {
  return {
    __esModule: true,
    useDispatch: jest.fn(() => () => {}),
    useSelector: jest.fn((selector) => selector({ contacts: { contactList: [] }, auth: { user: '' } }))
  };
});
