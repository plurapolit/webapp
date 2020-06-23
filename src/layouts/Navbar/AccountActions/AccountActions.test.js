import React from "react";
import { shallow } from "enzyme";
import Button from "../../../components/Button/Button";
import SignOutButton from "../../../components/SignOutButton/SignOutButton";

import AccountActions from "./AccountActions";

const setup = (propOverrides) => {
  const props = {
    customStyle: { item: "lol" },
    ...propOverrides,
  };
  const wrapper = shallow(<AccountActions user={props.user} customStyle={props.customStyle} />);
  return {
    wrapper,
  };
};

describe("<AccountActions />", () => {
  it("should render a signOutButton when user is logged in", () => {
    const { wrapper } = setup({ user: true });
    expect(wrapper.find(SignOutButton)).toHaveLength(1);
  });
  it("should render a signUpButton when user is not logged in", () => {
    const { wrapper } = setup({ user: false });
    const signUpButton = wrapper.find(Button).filterWhere((el) => el.props().buttonStyle === "cta");
    expect(signUpButton.props().children).toBe("Registrieren");
  });
  it("should render a signInButton when user is not logged in", () => {
    const { wrapper } = setup({ user: false });
    const signInButton = wrapper.find(Button).filterWhere((el) => el.props().buttonStyle === "secondary");
    expect(signInButton.props().children).toBe("Anmelden");
  });
});
