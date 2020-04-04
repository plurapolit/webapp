import React from "react";
import { shallow } from "enzyme";

import * as PlayerContextModule from "../../../contexts/PlayerContext/PlayerContext";
import * as PanelStoreContextModule from "../../../contexts/PanelStoreContext/PanelStoreContext";
import PlayAllButton from "./PlayAllButton";
import Button from "../../../components/Button/Button";
import { expertStatements, queue } from "../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    shortTitle: "default Title",
    expertStatements,
    queue,
    ...propOverrides,
  };
  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    queue: props.queue,
    startPlayer: jest.fn(),
  }));
  jest.spyOn(PanelStoreContextModule, "usePanelContext").mockImplementation(() => ({
    shortTitle: props.shortTitle,
    expertStatements: props.expertStatements,
  }));
  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <PanelStoreContextModule.PanelProvider>
        <PlayAllButton />
      </PanelStoreContextModule.PanelProvider>
    </PlayerContextModule.PlayerProvider>,
  ).dive().dive();
  return {
    wrapper,
  };
};

describe("<PlayAllButton />", () => {
  it("should render one Button", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should render button with a onClick prop", () => {
    const { wrapper } = setup();
    expect(typeof wrapper.find(Button).props().onClick).toBe("function");
  });

  it("should call setAudioTrackList on button click", () => {
    const setAudioTrackList = jest.fn();
    const customQueue = { ...queue, setAudioTrackList };
    const { wrapper } = setup({ queue: customQueue });
    wrapper.find(Button).simulate("click");
    expect(setAudioTrackList).toBeCalledTimes(1);
  });

  it("should prepare object correctly", () => {
    const obj = {
      audioFile: "url",
      author: "full_name",
      statementId: "id",
      intro: "intro_url",
      panelTitle: "title",
    };
    const newExpertStatements = [
      {
        ...expertStatements[0],
        statement: {
          ...expertStatements[0].statement,
          id: obj.statementId,
        },
        statement_audio_file: { file_link: obj.audioFile },
        intro: { audio_file_link: obj.intro },
        user: { full_name: obj.author },
      },
    ];
    let audios;
    const setAudioTrackList = (array) => { audios = array; };
    const customQueue = { ...queue, setAudioTrackList };
    const { wrapper } = setup({
      queue: customQueue,
      expertStatements: newExpertStatements,
      shortTitle: obj.panelTitle,
    });
    wrapper.find(Button).simulate("click");
    expect(audios).toEqual([obj]);
  });
});
