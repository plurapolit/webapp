/* eslint-disable react/button-has-type */
import React from "react";

import Statement from "../Statement/Statement";
import PlayAllButton from "../PlayAllButton/PlayAllButton";
import { usePanelContext } from "../../../contexts/PanelStoreContext/PanelStoreContext";
import Hyphen from "../../../helper/HyphenHelper";
import ReadMore from "../../../components/ReadMore/ReadMore";

import styles from "./PanelContent.module.scss";

const PanelContent = () => {
  const {
    description,
    expertStatements,
    panelDate,
    title,
  } = usePanelContext();

  return (
    <div>
      <div className={styles["title-date-wrapper"]}>
        <Hyphen>
          <div className={styles.title}>{title}</div>
        </Hyphen>
        <div className={styles.date}>{panelDate}</div>
      </div>
      <div className={styles.description}>
        <ReadMore
          text={description}
        />
      </div>
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
