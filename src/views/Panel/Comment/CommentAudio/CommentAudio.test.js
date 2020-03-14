import React from "react";
import { shallow } from "enzyme";
import * as PlayerContextModule from "../../../../contexts/PlayerContext/PlayerContext";
import { commentData } from "../../../../helper/TestHelper";

import Audio from "./CommentAudio";

const setup = (propOverrides) => {
  const props = {
    commentData,
    setAudioTrack: jest.fn(),
    ...propOverrides,
  };

  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    setAudioTrack: props.setAudioTrack,
  }));

  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <Audio commentData={props.commentData} />
    </PlayerContextModule.PlayerProvider>,
  ).dive();
  return {
    wrapper,
  };
};

describe("<Audio />", () => {
  it("should render audio icon", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".audio-icon_img")).toHaveLength(1);
  });

  it("should render a duration", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".audio-info_duration")).toHaveLength(1);
  });

  it("should render a date", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".audio-info_date")).toHaveLength(1);
  });

  it("should call setAudioTrack on click", () => {
    const setAudioTrack = jest.fn();
    const { wrapper } = setup({ setAudioTrack });
    wrapper.find(".audio-icon").simulate("click");
    expect(setAudioTrack).toHaveBeenCalled();
  });

  it("should style audio-icon differently if user is a expert", () => {
    const customCommentData = {
      ...commentData,
      user: {
        ...commentData.user,
        role: "expert",
      },
    };
    const { wrapper } = setup({ commentData: customCommentData });
    expect(wrapper.find(".audio-icon--expert")).toHaveLength(1);
  });
});
