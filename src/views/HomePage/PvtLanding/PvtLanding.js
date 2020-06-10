import React, { useRef, useState } from "react";

import { If } from "react-if";
import Button, {ButtonStyle} from "../../../components/Button/Button";
import Notification from "../../../helper/NotificationHelper";
import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Text from "../../../components/Text/Text";
import icon from "../../../assets/images/p-lock.svg";

import styles from "./PvtLanding.module.scss";

const PvtLanding = () => {
  const nameInput = useRef(undefined);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const handleClick = (event) => {
    setShowNamePrompt(true);
    event.preventDefault();
  };
  const createRoom = (event) => {
    Notification.success(
        "Raum " + nameInput.current.value + " wird angelegt.",
    );
    nameInput.current.value = "";
    setShowNamePrompt(false);
    event.preventDefault();
  };
  return (
    <section className={styles["pvtlanding"]}>
      <ContentWrapper>
        <img src={icon} alt="" />
        <div className={`${styles["heading"]} u-margin-bottom--medium`}>
          Private Diskussionsräume
        </div>
        <Text>
          <ul className={styles["checkul"]}>
            <li>Diskussionen in einer sicheren Umgebung in geschlossenen Räumen</li>
            <li>Geeignet vor allem für Schulklassen und Jugendgruppen</li>
            <li>Ein Moderator – viele Teilnehmer</li>
            <li>Förderung des politischen Diskurses und der persönlichen Meinungsbildung</li>
            <li>Ein Raum – eine Gruppe – mehrere Themen</li>
          </ul>
        </Text>
        <form onSubmit={(event) => event.preventDefault()} >
          <If condition={showNamePrompt}>
            <div className={styles["name"]}
                 style={{display: showNamePrompt ? "block" : "none"}}>
              Gib den Namen Deines Raumes ein:
              <input
                className={styles["nameinput"]}
                type="text"
                name="nameinput"
                placeholder="Raumname"
                ref={nameInput}
                required
              />
              <Button type="submit" onClick={(event) => createRoom(event)}>Fertig</Button>
            </div>
          </If>
          <If condition={!showNamePrompt}>
            <Button type="submit" buttonStyle={ButtonStyle.CTA}
                    onClick={(event) => handleClick(event)}
                    >
              Privaten Raum erstellen
            </Button>
          </If>
        </form>
      </ContentWrapper>
    </section>
  );
};

export default PvtLanding;
