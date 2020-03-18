/* eslint-disable react/button-has-type */
import React from "react";

import Statement from "../Statement/Statement";
import PlayAllButton from "../PlayAllButton/PlayAllButton";
import { usePanelContext } from "../../../contexts/PanelStoreContext/PanelStoreContext";

import styles from "./PanelContent.module.scss";

const PanelContent = () => {
  const {
    title,
    description,
    expertStatements,
  } = usePanelContext();

  return (
    <div>
      <div className={styles.headline}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.wrapper}>
        <div className={styles["experts-headline"]}>Expert/-innen</div>
        <PlayAllButton />
        {expertStatements.map((expert) => (
          <Statement
            key={expert.statement.id}
            expert={expert}
          />
        ))}
      </div>
    </div>
  );
};

export default PanelContent;
