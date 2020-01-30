import React, { useState } from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';

const AcceptTerms = ({ nextPage }) => {
  const [terms, setTerms] = useState(false);
  return (
    <>
      <Text>Hier stehen ihre Nutzungsbedingungen</Text>
      <Button onClick={() => setTerms(true)}>
        Ich akzeptiere die Nutzungsbedingungen
      </Button>
      {terms ? <Button onClick={() => nextPage()}>weiter</Button> : null}
    </>
  );
};

export default AcceptTerms;
