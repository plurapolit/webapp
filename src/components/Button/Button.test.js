import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import Button, { ButtonStyle } from "./Button";

const setup = (propOverrides) => {
  const props = {
    style: null,
    buttonStyle: ButtonStyle.PRIMARY,
    type: "button",
    to: undefined,
    onClick: () => { },
    ...propOverrides,
  };
  const wrapper = shallow(
    <Button
      style={props.style}
      buttonStyle={props.buttonStyle}
      type={props.type}
      to={props.to}
      onClick={props.onClick}
    />,
  );
  return {
    wrapper,
  };
};

describe("<Button />", () => {
  it("should render a button", () => {
    const { wrapper } = setup();
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should update button with own custom style", () => {
    const customStyle = "custom Style";
    const { wrapper } = setup({ style: customStyle });
    expect(wrapper.find("button").props().style).toMatch(customStyle);
  });

  it("should change className of button througth ButtonStyles", () => {
    const buttonStyle = ButtonStyle.CTA;
    const { wrapper } = setup({ buttonStyle });
    expect(wrapper.find(".button--cta")).toHaveLength(1);
  });

  it("should change button type througth prop type", () => {
    const buttonType = "submit";
    const { wrapper } = setup({ type: buttonType });
    expect(wrapper.find("button").props().type).toMatch(buttonType);
  });

  it("should render a link if prop to is defined", () => {
    const to = "some-url";
    const { wrapper } = setup({ to });
    expect(wrapper.find(Link).props().to).toMatch(to);
  });

  it("should call on click event provided function", () => {
    const mockFunc = jest.fn();
    const { wrapper } = setup({ onClick: mockFunc });
    wrapper.find("button").simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
