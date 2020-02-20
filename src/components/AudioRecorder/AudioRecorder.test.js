import React from "react";
import { shallow } from "enzyme";

import AudioRecorder from "./AudioRecorder";
import Button from "../Button/Button";

const setup = (propOverrides) => {
  const props = {
    setFileLink: jest.fn(),
    setDuration: jest.fn(),
    nextPage: jest.fn(),
    ...propOverrides,
  };
  const wrapper = shallow(
    <AudioRecorder
      setFileLink={props.setFileLink}
      setDuration={props.setDuration}
      nextPage={props.nextPage}
    />,
  );
  return {
    wrapper,
    props,
  };
};

describe("<AudioRecorder />", () => {
  it("should render button for recording", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  // it("should render stop button while recording", () => {
  //   const { wrapper } = setup();
  //   wrapper.find(".recording-button").simulate("click");
  //   console.log(wrapper.debug());
  //   expect(wrapper);
  // });
});
