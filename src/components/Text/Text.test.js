import React from "react";
import { shallow } from "enzyme";

import Text from "./Text";

const setup = (propOverrides) => {
  const props = {
    children: "This is sample text",
    headline: null,
    ...propOverrides,
  };
  const wrapper = shallow(<Text headline={props.headline}>{props.children}</Text>);
  return {
    wrapper,
  };
};

describe("<Text />", () => {
  it("should render the Text without headline", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".text").text()).toMatch("This is sample text");
  });

  it("should not render the Text with headline", () => {
    const { wrapper } = setup({ headline: "Headline" });
    expect(wrapper.find(".headline").text()).toMatch("Headline");
  });
});
