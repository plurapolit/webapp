import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { getDataFromEvent } from "../../../helper/FormHelper";

import styles from "./AddQuote.module.scss";

const AddQuote = ({ setQuote, sendToRails }) => {
  const [inputLength, setInputLength] = useState(0);

  const addQuote = (event) => {
    const data = getDataFromEvent(event);
    setQuote(data.quote);
    sendToRails();
  };

  const handleCharacterInput = (event) => {
    const { length } = event.target.value;
    setInputLength(length);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["headline"]}>
        Bitte fasse deine Aussage in wenigen Worten zusammen
      </div>
      <form className={styles["form"]} onSubmit={(event) => addQuote(event)}>
        <div className={styles["textarea-container"]}>
          <textarea
            rows="4"
            cols="50"
            className={styles["form-input"]}
            name="quote"
            placeholder="Beschreibung ..."
            maxLength="120"
            /* eslint-disable jsx-a11y/no-autofocus */
            autoFocus
            /* eslint-enable jsx-a11y/no-autofocus */
            onChange={(e) => handleCharacterInput(e)}
            required
          />
          <div className={styles["input-length"]}>
            {`${inputLength}/120`}
          </div>
          <span>
            <Button style={{ margin: "0 auto" }} type="submit" dataTest="send-button">Abschicken</Button>
          </span>
        </div>
      </form>
      <div className={styles["step-index"]}>Schritt 4 von 4</div>
    </div>
  );
};

export default AddQuote;
