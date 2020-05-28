import React from "react";
import { pipe, createFunction } from "../../helper/FunctionalProgrammingHelper";
import { getLengthOfString } from "../../helper/StringHelper";

const ReadMoreAndLess = ({
  readMoreText = "mehr lesen",
  readLessText = "weniger lesen",
  charLimit = 250,
  text,
}) => {
  const isLengthLessThanCharLimit = createFunction((length) => length < charLimit);
  const textIsLessThanCharLimit = pipe(
    getLengthOfString,
    isLengthLessThanCharLimit,
  )(text);
  console.log("textIsLessThanCharLimit ", textIsLessThanCharLimit);
  return (
    <div>
      Hello
    </div>
  );
};

export default ReadMoreAndLess;
