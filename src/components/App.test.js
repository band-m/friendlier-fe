import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/request.js');

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
