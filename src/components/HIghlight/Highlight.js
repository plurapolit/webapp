import React from "react";
import If, { Else } from "react-if";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

import styles from "./Highlight.module.scss";

export default function Highligh({ children, renderCondition }) {
  const { tutorialStepIndex } = useStoreContext();

  return (
    <div className={tutorialStepIndex === renderCondition ? styles["highlight"] : null}>
      {children}
    </div>
  );
}
