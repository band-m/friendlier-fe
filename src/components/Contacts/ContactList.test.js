import React from 'react';
import { shallow } from 'enzyme';
import ContactList from './ContactList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('ContactList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><ContactList /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
