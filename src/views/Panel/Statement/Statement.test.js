import React from "react";
import { shallow } from "enzyme";

import Statement from "./Statement";
import { expert } from "../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    expert,
    ...propOverrides,
  };
  const wrapper = shallow(<Statement expert={props.expert} />);
  return {
    wrapper,
  };
};

describe("<Statement />", () => {
  it("should render the Statement without crashing", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".expert-wrapper")).toHaveLength(1);
  });
});
