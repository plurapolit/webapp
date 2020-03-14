import React from "react";
import { shallow } from "enzyme";

import Statement from "./Statement";
import { expert } from "../../../helper/TestHelper";
import * as PlayerContextModule from "../../../contexts/PlayerContext/PlayerContext";

const setup = (propOverrides) => {
  const props = {
    expert,
    setSong: jest.fn(),
    ...propOverrides,
  };

  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    setSong: props.setSong,
  }));

  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <Statement expert={props.expert} />
    </PlayerContextModule.PlayerProvider>,
  ).dive();
  return {
    wrapper,
  };
};

describe("<Statement />", () => {
  it("should render the Statement without crashing", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".statement-comment-container")).toHaveLength(1);
  });
});
