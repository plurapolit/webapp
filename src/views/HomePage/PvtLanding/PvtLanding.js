import React, { useRef, useState, Fragment } from "react";

import { If } from "react-if";
import Button, {ButtonStyle} from "../../../components/Button/Button";
import Notification from "../../../helper/NotificationHelper";
import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Text from "../../../components/Text/Text";
import icon from "../../../assets/images/p-lock.svg";
import PvtPopup from "../PvtPopup/PvtPopup";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";

import styles from "./PvtLanding.module.scss";

const PvtLanding = () => {
  const nameInput = useRef(undefined);
  const modal = useModalContext()
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const handleClick = (event) => {
    setShowNamePrompt(true);
    event.preventDefault();
  };
  const createRoom = (event) => {
    modal.showContent(<PvtPopup inviteCode={"1337"} />);
    nameInput.current.value = "";
    setShowNamePrompt(false);
    event.preventDefault();
  };
  return (
    <section className={styles["pvtlanding"]}>
      <ContentWrapper>
        <div className={styles["flex-wrapper"]}>
          <img src={icon} alt="Plurapolit" />
          <div>
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
          </div>
        </div>
        <If condition={!showNamePrompt}>
          <div>
            <Button
              type="submit"
              buttonStyle={ButtonStyle.CTA}
              onClick={(event) => handleClick(event)}
            >
              Privaten Raum erstellen
            </Button>
          </div>
        </If>
      </ContentWrapper>
      <form onSubmit={(event) => event.preventDefault()}>
        <If condition={showNamePrompt}>
          <div className={styles["name"]}>
            <ContentWrapper>
              <p>Gib den Namen Deines Raumes ein:</p>
              <input
                className={styles["nameinput"]}
                type="text"
                name="nameinput"
                placeholder="Raumname"
                ref={nameInput}
                required
              />
              <Button
                type="submit"
                buttonStyle={ButtonStyle.OUTLINED}
                onClick={(event) => createRoom(event)}
              >
                Raum erstellen
              </Button>
            </ContentWrapper>
          </div>
        </If>
      </form>
    </section>
  );
};

export default PvtLanding;
