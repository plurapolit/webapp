import React, { useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
} from "draft-js";

import InlineStyleControls from "./InlineStyleControls/InlineStyleControls";
import styles from "./MarkdownEditor.module.scss";
import "./EditorOverwrite.css";

const emptyBlockJson = {
  text: " ",
  type: "unstyled",
  depth: 0,
  inlineStyleRanges: [],
  entityRanges: [],
  data: {},
};

const createEditorState = (userFullName) => {
  if (userFullName) {
    const json = {
      blocks: [
        {
          ...emptyBlockJson,
          key: "5kq46",
          text: `@${userFullName}`,
          inlineStyleRanges: [
            {
              offset: 0,
              length: userFullName.length + 2,
              style: "BOLD",
            },
          ],
        },
        {
          ...emptyBlockJson,
          key: "74fr4",
        },
      ],
      entityMap: {},
    };
    const initialContentState = convertFromRaw(json);
    const editorStateWithContent = EditorState.createWithContent(initialContentState);
    return EditorState.moveFocusToEnd(editorStateWithContent);
  }
  return EditorState.createEmpty();
};

const MarkdownEditor = ({
  onChange = () => {},
  userFullName,
}) => {
  const [editorState, setEditorState] = React.useState(createEditorState(userFullName));
  const editorRef = useRef();

  const onInputChange = (state) => {
    setEditorState(state);
    onChange(state);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) onInputChange(newState);
  };

  const toggleInlineStyle = (style) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    onInputChange(newState);
  };

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  return (
    <div className={styles["markdown"]}>
      <div className={styles["button-container"]}>
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </div>
      <div className={styles["markdown-input"]}>
        <Editor
          editorState={editorState}
          onChange={onInputChange}
          handleKeyCommand={handleKeyCommand}
          ref={editorRef}
          spellCheck
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
