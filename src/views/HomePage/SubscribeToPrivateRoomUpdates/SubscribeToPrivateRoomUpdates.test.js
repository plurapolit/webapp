import React from "react";
import { shallow } from "enzyme";
import { getInput, getForm, getButton } from "../../../helper/TestHelper";

import SubscribeToPrivateRoomUpdates from "./SubscribeToPrivateRoomUpdates";

const setup = () => {
  const wrapper = shallow(<SubscribeToPrivateRoomUpdates />);
  return {
    wrapper,
  };
};

describe("<SubscribeToPrivateRoomUpdates />", () => {
  it("should render a input field", () => {
    const { wrapper } = setup();
    const input = getInput(wrapper);
    expect(input).toHaveLength(1);
  });

  it("should render a submit button", () => {
    const { wrapper } = setup();
    const button = getButton(wrapper);
    expect(button).toHaveLength(1);
  });

  it("should render a form", () => {
    const { wrapper } = setup();
    const form = getForm(wrapper);
    expect(form).toHaveLength(1);
  });
});
