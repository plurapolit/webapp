import React, { useEffect } from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
} from "draft-js";

const TextComment = ({
  textRecord,
}) => {
  const { content } = textRecord;
  const convertedData = convertFromRaw(JSON.parse(content));
  const editorState = EditorState.createWithContent(convertedData);

  useEffect(() => {
    const elements = document.getElementsByClassName("public-DraftEditor-content");
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < elements.length; i++) {
      const { style } = elements[i];
      style.minHeight = 0;
      style.marginTop = ".5rem";
      style.marginLeft = ".5rem";
    }
  }, []);

  return (
    <span>
      <Editor editorState={editorState} readOnly />
    </span>
  );
};

export default TextComment;
