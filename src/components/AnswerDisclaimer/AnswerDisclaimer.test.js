import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import AnswerDisclaimer from "./AnswerDisclaimer";

const setup = (propOverrides) => {
  const props = {
    commentLength: 1,
    statementDate: moment().subtract(1, "days").format(),
    expertFullName: "Darth Vader",
    ...propOverrides,
  };
  const wrapper = shallow(
    <AnswerDisclaimer
      nextPage={props.nextPage}
      statementDate={props.statementDate}
      expertFullName={props.expertFullName}
    />,
  );
  return {
    wrapper,
  };
};

describe("<AnswerDisclaimer />", () => {
  it("should render the Disclaimer with Expert Name", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".disclaimer").text()).toMatch("Darth Vader");
  });
});
