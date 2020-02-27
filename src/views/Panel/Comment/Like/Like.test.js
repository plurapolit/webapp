import React from "react";
import { shallow } from "enzyme";
import { If } from "react-if";

import { commentData } from "../../../../helper/TestHelper";
import LikeButton from "../../../../components/LikeButton/LikeButton";
import Like from "./Like";

const setup = (propOverrides) => {
  const props = {
    commentData,
    likes: 2,
    liked: false,
    handleLikeClick: jest.fn(),
    ...propOverrides,
  };
  const wrapper = shallow(
    <Like
      commentData={props.commentData}
      likes={props.likes}
      liked={props.liked}
      handleLikeClick={props.handleLikeClick}
    />,
  );
  return {
    wrapper,
  };
};

describe("<Like />", () => {
  it("should render a like number", () => {
    const likeCount = 3;
    const { wrapper } = setup({ likes: likeCount });
    expect(wrapper.find(".like_count").text()).toEqual(likeCount.toString());
  });

  it("should render a likeButton with prop handleLikeClick", () => {
    const handleLikeClick = jest.fn();
    const { wrapper } = setup({ handleLikeClick });
    expect(wrapper.find(LikeButton).props().handleLikeClick).toEqual(handleLikeClick);
  });

  it("should render the LikeBatch if its the most liked comment", () => {
    const customCommentData = {
      ...commentData,
      likes: {
        ...commentData.likes,
        most_liked_comment: true,
      },
    };
    const { wrapper } = setup({ commentData: customCommentData });
    expect(wrapper.find(If).props().condition).toEqual(true);
  });
});
