import React from 'react';
import Button from '../Button/Button';
import { getDataFromEvent } from '../../helper/helper';

const AddQuote = ({ setQuote, sendToRails }) => {

  const addQuote = (event) => {
    const data = getDataFromEvent(event);
    setQuote(data.quote);
    sendToRails();
  };

  return (
    <>
      <form onSubmit={(event) => addQuote(event)}>
        <input type="text" name="quote" placeholder="Beschreibung ..." />
        <Button type="submit">Abschicken</Button>
      </form>
    </>
  );
};

export default AddQuote;
