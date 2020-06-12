import React, { useRef, useState } from "react";
import { If } from "react-if";

import JwtApi from "../../../api/JwtApi";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import Button, { ButtonStyle } from "../../../components/Button/Button";
import Notification from "../../../helper/NotificationHelper";
import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Text from "../../../components/Text/Text";
import icon from "../../../assets/images/p-lock.svg";
import PvtPopup from "../PvtPopup/PvtPopup";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";

import Checkmark from "../../../assets/images/checkmark.svg";
import styles from "./PvtLanding.module.scss";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";

const PvtLanding = () => {
  const nameInput = useRef(undefined);
  const modal = useModalContext();
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const { createPrivateRoom, getUserId } = useStoreContext();

  const handleClick = async (event) => {
    event.preventDefault();
    const valid = await JwtApi.validate();
    if (valid) {
      setShowNamePrompt(true);
      return undefined;
    }
    modal.showContent(
      <SignInComponent routeBack={modal.closeModal} onLinkClick={modal.closeModal} />,
    );
    return Notification.warning(
      "Um einen Raum erstellen zu können, muss man sich vorher anmelden",
    );
  };
  const createRoom = (event) => {
    event.preventDefault();
    const userId = getUserId();
    const inviteCode = createPrivateRoom(userId);
    modal.showContent(<PvtPopup inviteCode={inviteCode} />);
    nameInput.current.value = "";
    setShowNamePrompt(false);
  };

  const ListElement = ({ children }) => (
    <li>
      <img className={styles["checkmark"]} src={Checkmark} alt="" />
      <div>
        {children}
      </div>
    </li>
  );

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
                <ListElement>
                  Diskussionen in einer sicheren Umgebung in geschlossenen Räumen
                </ListElement>
                <ListElement>Geeignet vor allem für Schulklassen und Jugendgruppen</ListElement>
                <ListElement>Ein Moderator – viele Teilnehmer</ListElement>
                <ListElement>
                  Förderung des politischen Diskurses und der persönlichen Meinungsbildung
                </ListElement>
                <ListElement>Ein Raum – eine Gruppe – mehrere Themen</ListElement>
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
