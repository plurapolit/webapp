import React from "react";
import { pipe, createFunction } from "../../helper/FunctionalProgrammingHelper";
import { getLengthOfString } from "../../helper/StringHelper";
import Button from "../Button/Button";

const wrapInDiv = (elements) => <div>{elements}</div>;

const ReadMoreAndLess = ({
  readMoreText = "mehr lesen",
  readLessText = "weniger lesen",
  charLimit = 10,
  text,
}) => {
  const isLengthMoreThanCharLimit = createFunction((length) => length > charLimit);
  const textIsMoreThanCharLimit = pipe(
    getLengthOfString,
    isLengthMoreThanCharLimit,
  )(text);

  if (textIsMoreThanCharLimit) {
    const addDotts = (string) => `${string} ...`;
    const getSubstringByCharLimit = (string) => string.substring(0, charLimit);
    const addLessButton = (elements) => (
      <>
        {elements}
        <Button>
          {readLessText}
        </Button>
      </>
    );
    const elements = pipe(
      getSubstringByCharLimit,
      addDotts,
      wrapInDiv,
      addLessButton,
    )(text);
    console.log("elements ", elements);
    return elements;
  }

  return text;
};

export default ReadMoreAndLess;
