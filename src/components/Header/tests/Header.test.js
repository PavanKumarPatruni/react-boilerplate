import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../Header';

describe('Header component', () => {
  const props = {
    title: 'React',
  };

  test('match snapshot correctly', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    props.Header = '';
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('match snapshot correctly', () => {
    const wrapper = mount(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
