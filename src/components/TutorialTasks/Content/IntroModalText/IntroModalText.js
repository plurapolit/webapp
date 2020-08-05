import React from "react";

import H1 from "../../../H1/H1";
import Button from "../../../Button/Button";

import styles from "./IntroModalText.module.scss";
import { useStoreContext } from "../../../../contexts/StoreContext/StoreContext";


export default function IntroModalText({ close }) {
  const { createTrackableFunc, getIdentifier } = useStoreContext();
  const identifier = getIdentifier();
  const tackableCloseAction = createTrackableFunc(close, { event: "start Tutorial", information: identifier });

  return (
    <div className={styles["intro"]}>
      <H1>
        Private Diskussionsräume
      </H1>
      <p>
        Willkommen bei der Plurapolit Feature-Demo für private Disskussionsräume!
      </p>
      <p>
        Um Plurapolit und das neue Feature kennen zu lernen,
        wird auf der linken Seite eine Anleitung angezeigt.
        Befolgen Sie diese bitte und drücken sie
        <span style={{ color: "green" }}> &quot;Erledigt&quot;</span>
        , um zum nächsten Schritt zu gelangen.
      </p>
      <Button
        style={{ marginTop: "4rem", width: "15rem" }}
        onClick={tackableCloseAction}
      >
        Starten
      </Button>
    </div>
  );
}
