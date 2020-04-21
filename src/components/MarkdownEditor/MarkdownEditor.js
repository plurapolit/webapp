import React, { useRef, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromHTML,
} from "draft-js";

import InlineStyleControls from "./InlineStyleControls/InlineStyleControls";
import styles from "./MarkdownEditor.module.scss";
import "./EditorOverwrite.css";

const createEditorState = (initialContent) => {
  if (initialContent) {
    const blockFromHTML = convertFromHTML(initialContent);
    const initialContentState = ContentState.createFromBlockArray(
      blockFromHTML.contentBlocks,
      blockFromHTML.entityMap,
    );
    const editorStateWithContent = EditorState.createWithContent(initialContentState);
    return EditorState.moveFocusToEnd(editorStateWithContent);
  }
  return EditorState.createEmpty();
};

const MarkdownEditor = ({
  onChange = () => {},
  initialContent,
}) => {
  const [editorState, setEditorState] = React.useState(createEditorState(initialContent));
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
