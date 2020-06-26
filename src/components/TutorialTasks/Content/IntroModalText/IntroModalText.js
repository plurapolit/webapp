import React from "react";

import H1 from "../../../H1/H1";

import styles from "./IntroModalText.module.scss";


export default function IntroModalText() {
  return (
    <div className={styles["intro"]}>
      <H1>
        Private Diskussionsräume
      </H1>
      <p>
        Willkommen bei der Plurapolit Feature-Demo für private Disskussionsräume
      </p>
      <p>
        Um Plurapolit und das neue Feature kennen zu lernen
        wird auf der linken Seite eine Anleitung angezeigt.
        Befolgen Sie diese bitte und drücken sie &quot erledigt &quot,
        um zum nächsten Schritt zu gelangen.
      </p>
    </div>
  );
}
