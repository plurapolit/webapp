import React from "react";
import { shallow } from "enzyme";

import * as PlayerContextModule from "../../../contexts/PlayerContext/PlayerContext";
import PlayAllButton from "./PlayAllButton";
import Button from "../../../components/Button/Button";
import { expertStatements } from "../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    panelTitle: "default Title",
    expertStatements,
    setAudios: jest.fn(),
    ...propOverrides,
  };
  jest.spyOn(PlayerContextModule, "usePlayerContext").mockImplementation(() => ({
    setAudios: props.setAudios,
  }));
  const wrapper = shallow(
    <PlayerContextModule.PlayerProvider>
      <PlayAllButton
        panelTitle={props.panelTitle}
        expertStatements={props.expertStatements}
      />
    </PlayerContextModule.PlayerProvider>,
  ).dive();
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

  it("should call setAudios on button click", () => {
    const setAudios = jest.fn();
    const { wrapper } = setup({ setAudios });
    wrapper.find(Button).simulate("click");
    expect(setAudios).toBeCalledTimes(1);
  });

  it("should prepare object correctly", () => {
    const obj = {
      audioFile: "url",
      author: "full_name",
      statementId: "id",
      panelTitle: "title",
    };
    const newExpertStatements = [
      {
        ...expertStatements[0],
        statement: {
          ...expertStatements[0].statement,
          id: obj.statementId,
        },
        statement_audio_file: {
          file_link: obj.audioFile,
        },
        user: {
          full_name: obj.author,
        },
      },
    ];
    let audios;
    const setAudios = (array) => { audios = array; };
    const { wrapper } = setup({
      setAudios,
      expertStatements: newExpertStatements,
      panelTitle: obj.panelTitle,
    });
    wrapper.find(Button).simulate("click");
    expect(audios).toEqual([obj]);
  });
});
