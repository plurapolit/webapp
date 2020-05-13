import React from "react";
import Button from "../../../components/Button/Button";

import styles from "./AcceptTerms.module.scss";

const AcceptTerms = ({ onClick }) => (
  <div className={styles["container"]}>
    <div className={styles["headline"]}>Nutzungsbedingungen</div>
    <ol className={styles["terms"]}>
      <li>Kommentare dürfen nicht beleidigen</li>
      <li>Kommentare dürfen keine rassistischen Äußerungen beinhalten</li>
      <li>Kommentare dürfen nicht zu Gewalt aufrufen</li>
      <div className={styles["terms-link"]}>
        <a href="/terms/" target="_blank">
          Mehr dazu
        </a>
      </div>
    </ol>
    <Button onClick={() => onClick()} dataTest="accept-terms-button">
      Ich akzeptiere die Nutzungsbedingungen
    </Button>
  </div>
);

export default AcceptTerms;
