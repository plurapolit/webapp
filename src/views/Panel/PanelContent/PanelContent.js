/* eslint-disable react/button-has-type */
import React from "react";

import Statement from "../Statement/Statement";

import styles from "./PanelContent.module.scss";

const PanelContent = ({ content }) => (
  <div>
    <div className={styles.headline}>{content.panel.title}</div>
    <div className={styles.description}>{content.panel.description}</div>
    <div className={styles.wrapper}>
      <div className={styles["experts-headline"]}>Expert/-innen</div>
      {content.expert_statements.map((expert) => (
        <Statement
          key={expert.statement.id}
          expert={expert}
          panelTitle={content.panel.short_title}
        />
      ))}
    </div>
    <div className={styles["disclaimer"]}>
      Alle zur Hamburgischen Bürgerschaftswahl 2020 antretenden Parteien
      wurden zur Mitwirkung auf PluraPolit angefragt. Nicht alle angefragten
      Parteien haben jedoch bislang Statements abgegeben.
    </div>
  </div>
);

export default PanelContent;
