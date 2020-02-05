import React, { useState } from 'react';
import Button from '../Button/Button';
import { getDataFromEvent } from '../../helper/helper';

import styles from './AddQuote.module.scss';

const AddQuote = ({ setQuote, sendToRails }) => {
  const [inputLength, setInputLength] = useState(0);

  const addQuote = (event) => {
    const data = getDataFromEvent(event);
    setQuote(data.quote);
    sendToRails();
  };

  const handleCharacterInput = (e) => {
    const { length } = e.target.value;
    setInputLength(length);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["headline"]}>Bitte fasse deine Aussage in wenigen Worten zusammen</div>
      <form className={styles["form"]} onSubmit={(event) => addQuote(event)}>
        <textarea
          rows="4"
          cols="50"
          className={styles["form-input"]}
          name="quote"
          placeholder="Beschreibung ..."
          maxLength="120"
          autoFocus
          onChange={(e) => handleCharacterInput(e)}
          required
        />
        <div className={styles["input-length"]}>
          {inputLength}
/120
        </div>
        <Button type="submit">Abschicken</Button>
      </form>
      <div className={styles["step-index"]}>Schritt 4 von 4</div>
    </div>
  );
};

export default AddQuote;
