import React, { useRef, useState } from "react";
import { If } from "react-if";

import Button, { ButtonStyle } from "../../../components/Button/Button";
import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import Text from "../../../components/Text/Text";
import icon from "../../../assets/images/p-lock.svg";
import PvtPopup from "../PvtPopup/PvtPopup";
import Highlight from "../../../components/Highlight/Highlight";
import { useModalContext } from "../../../contexts/ModalContext/ModalContext";

import Checkmark from "../../../assets/images/checkmark.svg";
import styles from "./PvtLanding.module.scss";
import { useStoreContext } from "../../../contexts/StoreContext/StoreContext";
import { getDataFromEvent } from "../../../helper/FormHelper";

const shouldBeAbleCreateARoom = (
  showNamePrompt,
  numberOfAssingedRooms,
) => showNamePrompt && numberOfAssingedRooms === 0;

const PvtLanding = () => {
  const nameInput = useRef(undefined);
  const modal = useModalContext();
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const {
    createPrivateRoom,
    getUserId,
    getAssignedRooms,
    createTrackableFunc,
    getIdentifier,
  } = useStoreContext();
  const assignedRooms = getAssignedRooms();
  const allowedToCreateARoom = shouldBeAbleCreateARoom(showNamePrompt, assignedRooms.length);
  const identifier = getIdentifier();

  const handleClickOnRoom = async (event) => {
    event.preventDefault();
    setShowNamePrompt(true);
  };

  const createRoom = (event) => {
    const { nameinput } = getDataFromEvent(event);
    const userId = getUserId();
    const inviteCode = createPrivateRoom(userId, nameinput);
    modal.showContent(<PvtPopup inviteCode={inviteCode} />);
    nameInput.current.value = "";
    setShowNamePrompt(false);
  };

  const trackableClickOnRoom = createTrackableFunc(handleClickOnRoom, { event: "clicked on Room", information: identifier });
  const trackableCreateRoom = createTrackableFunc(createRoom, { event: "created Room", information: identifier });

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
            <Highlight renderCondition={1}>
              <Button
                type="submit"
                buttonStyle={ButtonStyle.CTA}
                onClick={(event) => trackableClickOnRoom(event)}
              >
                Erstelle einen privaten Raum
              </Button>
            </Highlight>
          </div>
        </If>
      </ContentWrapper>
      { allowedToCreateARoom
        && (
          <form onSubmit={(event) => trackableCreateRoom(event)}>
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
                >
                  Raum erstellen
                </Button>
              </ContentWrapper>
            </div>
          </form>
        )}
    </section>
  );
};

export default PvtLanding;
