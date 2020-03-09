import React from "react";
import { shallow } from "enzyme";

import Button from "../../../../components/Button/Button";
import { expert } from "../../../../helper/TestHelper";
import * as PlayerContextModule from "../../../../contexts/PlayerContext/PlayerContext";

import StatementControls from "./StatementControls";

const setup = (propOverrides) => {
  const props = {
    expert,
    panelTitle: "default title",
    toggleComments: jest.fn(),
    setAudioTrack: jest.fn(),
    ...propOverrides,
  };

  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    setAudioTrack: props.setAudioTrack,
  }));

  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <StatementControls
        expert={props.expert}
        panelTitle={props.panelTitle}
        toggleComments={props.toggleComments}
      />
    </PlayerContextModule.PlayerProvider>,
  ).dive();
  return {
    wrapper,
  };
};

describe("<StatementControls />", () => {
  it("should render comment button with count", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Button).prop("children")).toEqual("5 Kommentare");
  });

  it("should render the duration of the statement", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".duration").text()).toEqual("01:23");
  });

  it("should render playbutton", () => {
    const setAudioTrack = jest.fn();
    const { wrapper } = setup({ setAudioTrack });
    wrapper.find(".play").simulate("click");
    expect(setAudioTrack).toHaveBeenCalled();
  });
});
