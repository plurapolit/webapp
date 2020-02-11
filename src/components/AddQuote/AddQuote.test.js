import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddQuote from './AddQuote';

configure({ adapter: new Adapter() });

const setup = (propOverrides) => {
  const props = {
    setQuote: jest.fn(),
    sendToRails: jest.fn(),
    ...propOverrides,
  };
  const wrapper = shallow(<AddQuote {...props} />);
  const form = wrapper.find('form');
  return {
    wrapper,
    props,
    form,
  };
};

const submit = {
  preventDefault: jest.fn(),
  target: [
    { name: "quote", value: "nice quote" },
  ],
};

describe('<AddQuote />', () => {
  it('should render a form', () => {
    const { form } = setup();
    expect(form).toHaveLength(1);
  });

  it('should render a textarea', () => {
    const { wrapper } = setup();
    expect(wrapper.find("textarea[name='quote']")).toHaveLength(1);
  });

  it('should render a button with type submit', () => {
    const { wrapper } = setup();
    expect(wrapper.find("Button[type='submit']")).toHaveLength(1);
  });

  it('should run setQuote on form submit', () => {
    const { props, form } = setup();
    form.simulate('submit', submit);
    expect(props.setQuote.mock.calls.length).toEqual(1);
  });

  it('should run sendToRails on form submit', () => {
    const { props, form } = setup();
    form.simulate('submit', submit);
    expect(props.sendToRails.mock.calls.length).toEqual(1);
  });

  it('should set input length on change', () => {
    const { wrapper } = setup();
    wrapper.find('textarea').simulate('change', { target: { name: 'quote', value: '12345' } });
    expect(wrapper.find('.input-length').text()).toEqual('5/120');
  });
});
