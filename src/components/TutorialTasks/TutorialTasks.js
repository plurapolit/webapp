import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  0: "Hier finden Sie die Schritte",
  1: "Erstellen Sie nun einen privaten Raum",
  2: "Hier wird Ihnen angezeigt in welchen Raum Sie sich aktuell befinden",
  3: "Öffnen Sie eine PluraPolit Diskussionsfrage",
  4: "Wechseln Sie in den öffentlichen Raum",
  5: "Jetzt werden Ihnen nur öffentliche Kommentare angezeigt",
};

const TutorialTasks = () => {
  const [show, setShow] = useState(true);
  const {
    tutorialStepIndex,
    TutorialHandler,
    createTrackableFunc,
    getIdentifier,
  } = useStoreContext();
  const history = useHistory();
  const { showContent, closeModal } = useModalContext();
  const identifier = getIdentifier();

  const openAssignmentAndCloseTutorial = () => {
    history.push("/assignment");
    setShow(false);
  };

  const trackTutorialStart = createTrackableFunc(() => {}, { event: "Tutorial starts", information: identifier });

  useEffect(() => {
    showContent(<IntroModalText close={closeModal} />);
    trackTutorialStart();
  }, []);

  let handleClick = () => {
    TutorialHandler.increment();
  };
  if (tutorialStepIndex === 5) handleClick = openAssignmentAndCloseTutorial;
  const trackableClickHandler = createTrackableFunc(handleClick, { event: `toogle task ${tutorialStepIndex}`, information: identifier });

  return show && (
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
