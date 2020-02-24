import React from "react";
import { shallow } from "enzyme";

import AcceptTerms from "./AcceptTerms";
import Button from "../../../components/Button/Button";

const setup = (propOverrides) => {
  const props = {
    nextPage: jest.fn(),
    ...propOverrides,
  };
  const wrapper = shallow(<AcceptTerms nextPage={props.nextPage} />);
  return {
    wrapper,
  };
};

describe("<AcceptTerms />", () => {
  it("should render one Button component", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should render terms", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".terms")).toHaveLength(1);
  });

  it("should contain a link to our terms", () => {
    const { wrapper } = setup();
    expect(wrapper.find({ href: "/terms/" })).toHaveLength(1);
  });
});
