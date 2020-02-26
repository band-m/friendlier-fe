import React from 'react';
import 'react-redux';
import 'react-router-dom';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders Login', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
