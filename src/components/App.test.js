import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/request.js');
jest.mock('../workers/subscribe-push.js');
jest.mock('../workers/unsubscribe-push.js');

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
