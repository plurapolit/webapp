import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import About from './About';
import Text from '../Text/Text';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    ...propOverrides,
  };
  const wrapper = shallow(<About {...props} />);
  return {
    wrapper,
  };
};

describe('<About />', () => {
  it('should render a text component', () => {
    const { wrapper } = setup();
    expect(wrapper.find(Text)).toHaveLength(1);
  });

  it('should render an about description', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.about-description')).toHaveLength(1);
  });
  it('should contain one ContentWrapper', () => {
    const { wrapper } = setup();
    expect(wrapper.find(ContentWrapper)).toHaveLength(1);
  });
});
