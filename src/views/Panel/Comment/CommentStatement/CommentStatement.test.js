import React from "react";
import { shallow } from "enzyme";

import Statement from "./CommentStatement";
import { commentData } from "../../../../helper/TestHelper";

const setup = (propOverrides) => {
  const props = {
    commentData,
    ...propOverrides,
  };
  const wrapper = shallow(<Statement commentData={props.commentData} />);
  return {
    wrapper,
  };
};

describe("<Statement />", () => {
  it("should render user name", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".statement_username")).toHaveLength(1);
  });

  it("should render a description", () => {
    const quote = "a nice description";
    const customCommentData = {
      ...commentData,
      comment: {
        ...commentData.comment,
        quote,
      },
    };
    const { wrapper } = setup({ commentData: customCommentData });
    expect(wrapper.find(".statement_comment").text()).toEqual(`“${quote}”`);
  });
});
