import React from "react";
import { shallow } from "enzyme";

import TwitterButton from "./TwitterButton";

const setup = (propOverrides) => {
  const props = {
    handle: "plurapolit",
    ...propOverrides,
  };
  const wrapper = shallow(<TwitterButton handle={props.handle} />);
  return {
    wrapper,
  };
};

describe("<TwitterButton />", () => {
  it("should render the TwitterButton if it has a handle", () => {
    const { wrapper } = setup();
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("should not render the TwitterButton when no handle is given", () => {
    const { wrapper } = setup({ handle: null });
    expect(wrapper.find("a")).toHaveLength(0);
  });
});
