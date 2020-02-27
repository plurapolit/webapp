import React from "react";
import { shallow } from "enzyme";

import Audio from "./Audio";

const setup = (propOverrides) => {
  const props = {
    commentData: null,
    ...propOverrides,
  };
  const wrapper = shallow(<Audio commentData={props.commentData} />);
  return {
    wrapper,
  };
};

describe("<Audio />", () => {
  it("", () => {
    const { wrapper } = setup();
    console.log(wrapper.debug());
  });
});
