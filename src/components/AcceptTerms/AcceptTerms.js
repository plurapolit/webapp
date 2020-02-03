import React from 'react';
import Button from '../Button/Button';

import styles from './AcceptTerms.module.scss';


const AcceptTerms = ({ nextPage }) => (
  <div className={styles["container"]}>
    <div className={styles["headline"]}>Nutzungsbedingungen</div>
    <ol className={styles["terms"]}>
      <li>
        Beiträge müssen
        <span className={styles["terms-emphasis"]}> unter 90 Sekunden </span>
        lang sein
      </li>
      <li>Beiträge dürfen nicht beleidigen</li>
      <li>Beiträge dürfen nicht ausgrenzen</li>
      <div className={styles["terms-link"]}><a href="/terms/" target="_blank">Mehr dazu</a></div>
    </ol>
    <Button onClick={() => nextPage()}>
        Ich akzeptiere die Nutzungsbedingungen
    </Button>
    <div className={styles["step-index"]}>Schritt 1 von 4</div>
  </div>
);

export default AcceptTerms;
