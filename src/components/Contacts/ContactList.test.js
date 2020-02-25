import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import ContactList from './ContactList';

describe('ContactList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ContactList />);
    expect(wrapper).toMatchSnapshot();
  });
});
