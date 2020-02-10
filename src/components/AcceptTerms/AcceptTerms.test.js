import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AcceptTerms from './AcceptTerms';
import Button from '../Button/Button';

configure({ adapter: new Adapter() });

describe('<AcceptTerms />', () => {
  it('should render one Button component', () => {
    const wrapper = shallow(<AcceptTerms />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should render terms', () => {
    const wrapper = shallow(<AcceptTerms />);
    expect(wrapper.find('.terms')).toHaveLength(1);
  });

  it('should contain a link to our terms', () => {
    const wrapper = shallow(<AcceptTerms />);
    expect(wrapper.find({ href: '/terms/' })).toHaveLength(1);
  });

});
