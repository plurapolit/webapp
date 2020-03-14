import React from "react";
import { shallow } from "enzyme";
import { expert } from "../../../../helper/TestHelper";

import StatementHeader from "./StatementHeader";

const setup = (propOverrides) => {
  const props = {
    expert,
    ...propOverrides,
  };
  const wrapper = shallow(
    <StatementHeader
      expert={props.expert}
    />,
  );
  return {
    wrapper,
  };
};

describe("<StatementHeader />", () => {
  it("should render the username", () => {
    const { wrapper } = setup();
    const username = expert.user.full_name;
    expect(wrapper.find(".name").text()).toEqual(username);
  });

  it("should render the organisation", () => {
    const { wrapper } = setup();
    const organisationName = expert.organisation.name;
    expect(wrapper.find(".organisation").text()).toEqual(organisationName);
  });

  it("should render the biography", () => {
    const customBiography = "CDU";
    const customData = {
      ...expert,
      user: {
        ...expert.user,
        biography: customBiography,
      },
    };
    const { wrapper } = setup({ expert: customData });
    expect(wrapper.find(".biography").text()).toEqual(customBiography);
  });
});
