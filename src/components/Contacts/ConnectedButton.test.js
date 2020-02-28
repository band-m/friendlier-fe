import React from 'react';
import { shallow } from 'enzyme';
import 'react-redux';
import 'react-router-dom';
import ConnectedButton from './ConnectedButton';

describe('ConnectedButton component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ConnectedButton slider1={''} slider2={''} deadlineObject={{}} id={''} />);
    expect(wrapper).toMatchSnapshot();
  });
});
