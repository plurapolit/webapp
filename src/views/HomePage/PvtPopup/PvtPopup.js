import React from "react";
import { Link } from "react-router-dom";

import Text from "../../../components/Text/Text";

import checkmark from "../../../assets/images/checkmark.svg";
import styles from "./PvtPopup.module.scss";

const PvtPopup = ({ inviteCode }) => (
  <div className={styles["pvtpopup"]}>
    <div>
      <img src={checkmark} alt="" className={styles["checkmark"]} />
      <div className={styles["heading"]}>Der private Raum wurde erfolgreich erstellt!</div>
    </div>
    <div>
      <Text headline="Der Code für die Einladung lautet:" />
      <div className={styles["heading--orange"]}>{inviteCode}</div>
    </div>
    <Text>
      Wie Leute den Raum betreten können und weitere Informationen findest Du
      <div className={styles["link"]}><Link to="/"> hier</Link></div>
    </Text>
  </div>
);

export default PvtPopup;
