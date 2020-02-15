import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOutButton/SignOutButton";
import BurgerMenu from "./BurgerMenu";
import Button from "../Button/Button";

const setup = (propOverrides) => {
  const props = {
    user: null,
    ...propOverrides,
  };
  const wrapper = shallow(<BurgerMenu user={props.user} />);
  return {
    wrapper,
  };
};

describe("<BurgerMenu />", () => {
  it("should render a home button", () => {
    const { wrapper } = setup();
    const HomeButton = wrapper.findWhere((element) => element.type() === Link && element.props().to === "/");
    expect(HomeButton).toHaveLength(1);
  });

  it("should render an about us button", () => {
    const { wrapper } = setup();
    const AboutButton = wrapper.findWhere((element) => element.type() === Link && element.props().to === "/2020-wir-uber-uns");
    expect(AboutButton).toHaveLength(1);
  });

  it("should render a terms button", () => {
    const { wrapper } = setup();
    const TermsButton = wrapper.findWhere((element) => element.type() === Link && element.props().to === "/terms/");
    expect(TermsButton).toHaveLength(1);
  });

  it("should render a sign in button while no user is set", () => {
    const { wrapper } = setup({ user: undefined });
    const SignInButton = wrapper.findWhere((element) => element.type() === Button && element.props().to === "/sign_in/");
    expect(SignInButton).toHaveLength(1);
  });

  it("should render component SignUpButton while no user is set", () => {
    const { wrapper } = setup({ user: undefined });
    const SignUpButton = wrapper.findWhere((element) => element.type() === Button && element.props().to === "/sign_up/");
    expect(SignUpButton).toHaveLength(1);
  });

  it("should render no sign out button while no user is set", () => {
    const { wrapper } = setup({ user: undefined });
    const signOutButton = wrapper.find(SignOutButton);
    expect(signOutButton).toHaveLength(0);
  });

  it("should not render one sign in button while user is set", () => {
    const { wrapper } = setup({ user: true });
    const SignInButton = wrapper.findWhere((element) => element.type() === Link && element.props().to === "/sign_in/");
    expect(SignInButton).toHaveLength(0);
  });

  it("should not render one sign up button while user is set", () => {
    const { wrapper } = setup({ user: true });
    const SignUpButton = wrapper.findWhere((element) => element.type() === Button && element.props().to === "/sign_up/");
    expect(SignUpButton).toHaveLength(0);
  });
});
