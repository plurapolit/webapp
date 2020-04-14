import React, { useState } from "react";
import { convertToRaw } from "draft-js";

import Button from "../../../components/Button/Button";
import MarkdownEditor from "../../../components/MarkdownEditor/MarkdownEditor";

import styles from "./TextRecord.module.scss";

const TextRecord = ({ sendToApi }) => {
  const [inputLength, setInputLength] = useState(0);
  const [input, setInput] = useState();

  const sendTextRecord = () => {
    const textRecordAsJson = JSON.stringify(convertToRaw(input.getCurrentContent()));
    sendToApi(textRecordAsJson);
  };

  const onChange = (value) => {
    const lengthOfInput = value.getCurrentContent().getPlainText().length;
    setInputLength(lengthOfInput);
    setInput(value);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["headline"]}>
        Bitte verfasse eine eigene Aussage oder Frage
      </div>
      <div className={styles["editor-container"]}>
        <MarkdownEditor
          onChange={onChange}
          maxLength="500"
        />
        <div className={styles["input-length"]}>
          {`${inputLength}/500`}
        </div>
        <span>
          <Button style={{ margin: "0 auto" }} onClick={sendTextRecord} dataTest="send-button">Abschicken</Button>
        </span>
      </div>
      <div className={styles["step-index"]}>Schritt 2 von 2</div>
    </div>
  );
};

export default TextRecord;
