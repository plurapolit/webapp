import React, { useState } from "react";
import { convertToRaw } from "draft-js";

import MarkdownEditor from "../../../components/MarkdownEditor/MarkdownEditor";
import Button, { ButtonStyle } from "../../../components/Button/Button";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";
import AcceptTerms from "../AcceptTerms/AcceptTerms";

import styles from "./CommentEditor.module.scss";

const CommentEditor = ({
  setCommenting,
  isReplyToComment = false,
  userFullName,
  onSend,
}) => {
  const [input, setInput] = useState();
  const modal = useModalContext();

  const handleSend = () => {
    modal.showContent(
      <AcceptTerms onClick={() => {
        modal.closeModal();
        setCommenting(false);
        const textRecordAsJson = JSON.stringify(convertToRaw(input.getCurrentContent()));
        onSend(textRecordAsJson);
      }}
      />,
    );
  };

  const onChange = (value) => setInput(value);

  return (
    <div>
      {isReplyToComment
      && (
        <MarkdownEditor
          userFullName={userFullName}
          onChange={onChange}
        />
      )}
      {!isReplyToComment && <MarkdownEditor onChange={onChange} />}
      <div className={styles["button-container"]}>
        <Button
          buttonStyle={ButtonStyle.COMMENT}
          onClick={() => setCommenting(false)}
          style={{ color: "#c8c8c8" }}
        >
          Abbrechen
        </Button>
        <Button
          buttonStyle={ButtonStyle.COMMENT}
          onClick={handleSend}
        >
          Senden
        </Button>
      </div>
    </div>
  );
};

export default CommentEditor;
