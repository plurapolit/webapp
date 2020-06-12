import React from "react";
import { shallow } from "enzyme";

import Button from "../../../../components/Button/Button";
import { expert, expertStatements, queue } from "../../../../helper/TestHelper";
import * as PlayerContextModule from "../../../../contexts/PlayerContext/PlayerContext";
import * as PanelStoreContextModule from "../../../../contexts/PanelStoreContext/PanelStoreContext";

import StatementControls from "./StatementControls";

const setup = (propOverrides) => {
  const props = {
    expert,
    expertStatements,
    shortTitle: "default title",
    toggleComments: jest.fn(),
    queue,
    startPlayer: jest.fn(),
    paused: false,
    ...propOverrides,
  };

  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    queue: props.queue,
    startPlayer: props.startPlayer,
    paused: props.paused,
  }));

  jest.spyOn(PanelStoreContextModule, "usePanelContext").mockImplementation(() => ({
    shortTitle: props.shortTitle,
    expertStatements: props.expertStatements,
  }));

  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <PanelStoreContextModule.PanelProvider>
        <StatementControls
          expert={props.expert}
          toggleComments={props.toggleComments}
        />
      </PanelStoreContextModule.PanelProvider>
    </PlayerContextModule.PlayerProvider>,
  ).dive().dive();
  return {
    wrapper,
  };
};

describe("<StatementControls />", () => {
  // it("should render comment button with count", () => {
  //   const { wrapper } = setup();
  //   expect(wrapper.find(Button).prop("children")).toEqual("5 Kommentare");
  // });

  it("should render the duration of the statement", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".duration").text()).toEqual("01:23");
  });

  it("should render play button", () => {
    const setAudioTrackList = jest.fn();
    const customQueue = { ...queue, setAudioTrackList };
    const { wrapper } = setup({ queue: customQueue });
    wrapper.find(".play").simulate("click");
    expect(setAudioTrackList).toHaveBeenCalled();
  });
});
