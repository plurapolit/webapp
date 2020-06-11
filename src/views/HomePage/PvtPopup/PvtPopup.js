import React, { useState, useEffect } from "react";
import { If } from "react-if";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import closeButton from "../../../assets/images/close.svg";
import Notification from "../../../helper/NotificationHelper";

import checkmark from "../../../assets/images/checkmark.svg";
import styles from "./PvtPopup.module.scss";

const PvtPopup = ({ inviteCode }) => {
  const modal = useModalContext();

  return (
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
        <div className={styles["link"]}><Link> hier</Link></div>.
      </Text>
    </div>
  );
};
export default PvtPopup;
