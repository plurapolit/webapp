import React from "react";
import { shallow } from "enzyme";
import { If } from "react-if";

import Comment from "./Comment";
import Audio from "./Audio/Audio";
import Statement from "./Statement/Statement";
import Like from "./Like/Like";
import { commentData } from "../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    commentData,
    setAnswered: jest.fn(),
    panelTitle: "Example Panel",
    ...propOverrides,
  };
  const wrapper = shallow(
    <Comment
      commentData={props.commentData}
      setAnswered={props.setAnswered}
      panelTitle={props.panelTitle}
    />,
  );
  return {
    wrapper,
  };
};

describe("<Comment />", () => {
  it("should render component Audio", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Audio)).toHaveLength(1);
  });

  it("should render a Statement component", () => {
    const { wrapper } = setup();
    expect(wrapper.find(Statement)).toHaveLength(1);
  });

  it("should render a Like component with callback function", () => {
    const { wrapper } = setup();
    expect(typeof wrapper.find(Like).props().handleLikeClick).toBe("function");
  });

  it("should show antwort mark if user role is expert", () => {
    const customCommentData = {
      ...commentData,
      user: {
        ...commentData.user,
        role: "expert",
      },
    };
    const { wrapper } = setup({ commentData: customCommentData });
    expect(wrapper.find(If).props().condition).toEqual(true);
  });
});
