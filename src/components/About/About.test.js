import React from 'react';
import { shallow } from 'enzyme';

import About from './About';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

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
    expect(wrapper.find('Text[headline]')).toHaveLength(1);
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
