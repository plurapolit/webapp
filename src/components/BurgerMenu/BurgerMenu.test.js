import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";

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
  it("should render a home Button", () => {
    const { wrapper } = setup();
    const HomeButton = wrapper.findWhere((element) => element.type() === Link && element.props().to === "/");
    expect(HomeButton).toHaveLength(1);
  });
});
