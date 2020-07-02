import React, { useEffect } from "react";

import Button, { ButtonStyle } from "../Button/Button";
import IntroModalText from "./Content/IntroModalText/IntroModalText";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import { useModalContext } from "../../contexts/ModalContext/ModalContext";

import styles from "./TutorialTasks.module.scss";


const getCustomButtonStyle = () => {
  const buttonStyle = {
    float: "right",
    fontSize: "1.4rem",
    fontWeight: "600",
    transform: "none",
    color: "rgb(0, 220, 49)",
    borderColor: "rgb(0, 220, 49)",
    padding: ".5rem 2rem",
  };
  return buttonStyle;
};

const checklistContent = {
  0: "Hier findest du die Schritte",
  1: "Raum erstellen",
  2: "Hier wird angezeigt in welchen Raum Sie sich aktuell befnden",
  3: "Öffnen Sie ein ein Themen-Panel",
  4: "Kommentare öffnen",
  5: "Wechseln Sie in den öffentlichen Raum",
  6: "Jetzt werden Ihnen nur öffentliche Kommentare angezeigt",
};

const TutorialTasks = () => {
  const {
    tutorialStepIndex,
    TutorialHandler,
    createTrackableFunc,
    getIdentifier,
  } = useStoreContext();
  const { showContent, closeModal } = useModalContext();
  const identifier = getIdentifier();

  const trackTutorialStart = createTrackableFunc(() => {}, { event: "Tutorial starts", information: identifier });

  useEffect(() => {
    showContent(<IntroModalText close={closeModal} />);
    trackTutorialStart();
  }, []);

  const handleClick = () => {
    TutorialHandler.increment();
  };
  const trackableClickHandler = createTrackableFunc(handleClick, { event: `toogle task ${tutorialStepIndex}`, information: identifier });

  return (
    <div className={styles["tutorial-tasks"]}>
      <p className={styles["headline"]}>
        Checklist
      </p>
      <ul>
        <li>{checklistContent[tutorialStepIndex]}</li>
      </ul>
      <Button
        buttonStyle={ButtonStyle.OUTLINED}
        style={getCustomButtonStyle()}
        onClick={trackableClickHandler}
      >
        Erledigt
      </Button>
    </div>
  );
};

export default TutorialTasks;
