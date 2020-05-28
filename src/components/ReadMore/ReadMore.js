import React, { useState } from "react";
import { pipe, createFunction } from "../../helper/FunctionalProgrammingHelper";
import { getLengthOfString } from "../../helper/StringHelper";
import Button, { ButtonStyle } from "../Button/Button";

const wrapInInlineDiv = (elements) => <div style={{ display: "inline" }}>{elements}</div>;
const addDotts = (string) => `${string} ...`;

const isTextMoreThanCharLimit = (text, charLimit) => {
  const isLengthMoreThanCharLimit = createFunction((length) => length > charLimit);
  const textIsMoreThanCharLimit = pipe(
    getLengthOfString,
    isLengthMoreThanCharLimit,
  )(text);
  return textIsMoreThanCharLimit;
};

const shortTextAndMoreButton = (text, charLimit, button) => {
  const getSubstringByCharLimit = (string) => string.substring(0, charLimit);
  const addMoreButton = (elements) => (
    <>
      {elements}
      {button}
    </>
  );
  const elements = pipe(
    getSubstringByCharLimit,
    addDotts,
    wrapInInlineDiv,
    addMoreButton,
  )(text);
  return elements;
};

const createReadMoreButton = ({ onClick, text }) => (
  <Button buttonStyle={ButtonStyle.COMMENT} onClick={onClick} style={{ marginLeft: ".4rem" }}>
    {text}
  </Button>
);

export default function ReadMore({
  readMoreText = "mehr lesen",
  charLimit = 250,
  text,
}) {
  const [readMore, setReadMore] = useState();

  if (isTextMoreThanCharLimit(text, charLimit) && !readMore) {
    const button = createReadMoreButton({ onClick: () => setReadMore(true), text: readMoreText });
    return shortTextAndMoreButton(text, charLimit, button);
  }

  return text;
}
