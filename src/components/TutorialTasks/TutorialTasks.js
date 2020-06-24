import React from "react";

import Button, { ButtonStyle } from "../Button/Button";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

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
  0: "Ich leite dich an",
  1: "Raum erstellen",
  2: "Ein Panel öffnen",
};

const TutorialTasks = () => {
  const { tutorialStepIndex, TutorialHandler } = useStoreContext();

  const handleClick = () => {
    TutorialHandler.increment();
    console.log(tutorialStepIndex);
  };

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
        onClick={handleClick}
      >
        Erledigt
      </Button>
    </div>
  );
};

export default TutorialTasks;
