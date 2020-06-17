import React from "react";
import { shallow } from "enzyme";
import Button from "../../../components/Button/Button";

import SubscribeToPrivateRoomUpdates from "./SubscribeToPrivateRoomUpdates";

const setup = () => {
  const wrapper = shallow(<SubscribeToPrivateRoomUpdates />);
  return {
    wrapper,
  };
};

const getInput = (wrapper) => wrapper.find("input");
const getForm = (wrapper) => wrapper.find("form");
const getButton = (wrapper) => wrapper.find(Button);

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
