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
});
