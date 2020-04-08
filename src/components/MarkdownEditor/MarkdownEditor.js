import React, { useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";

import InlineStyleControls from "./InlineStyleControls/InlineStyleControls";
import styles from "./MarkdownEditor.module.scss";
import "./EditorOverwrite.css";

const MarkdownEditor = ({
  onChange,
  maxLength,
}) => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const editorRef = useRef();

  const onInputChange = (state) => {
    if (state.getCurrentContent().getPlainText().length <= parseInt(maxLength, 10)) {
      setEditorState(state);
      onChange(state);
    }
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onInputChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    onInputChange(newState);
  };

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  return (
    <div>
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
