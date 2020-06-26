import React from "react";
import { shallow, mount } from "enzyme";

import AddRoomModal from "./AddRoomModal";
import {
  getForm, getInput, getButton, user,
} from "../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    onSubmit: jest.fn(),
    closeModal: jest.fn(),
    user,
    ...propOverrides,
  };
  const wrapper = shallow(
    <AddRoomModal
      onSubmit={props.onSubmit}
      closeModal={props.closeModal}
      user={props.user}
    />,
  );

  const mountedWrapper = mount(
    <AddRoomModal
      onSubmit={props.onSubmit}
      closeModal={props.closeModal}
      user={props.user}
    />,
  );

  return {
    wrapper,
    mountedWrapper,
  };
};

describe("<AddRoomModal />", () => {
  it("should render a form", () => {
    const { wrapper } = setup();
    const form = getForm(wrapper);
    expect(form).toHaveLength(1);
  });

  it("should render a input", () => {
    const { wrapper } = setup();
    const input = getInput(wrapper);
    expect(input).toHaveLength(1);
  });

  it("should render a submit button with Text 'Eintragen'", () => {
    const { wrapper } = setup();
    const button = getButton(wrapper);
    expect(button.props().children).toBe("Eintragen");
  });

  // TODO: Test submit form
});
