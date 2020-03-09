/* eslint-disable react/button-has-type */
import React from "react";

import Statement from "../Statement/Statement";
import PlayAllButton from "../PlayAllButton/PlayAllButton";

import styles from "./PanelContent.module.scss";

const PanelContent = ({ content }) => (
  <div>
    <div className={styles.headline}>{content.panel.title}</div>
    <div className={styles.description}>{content.panel.description}</div>
    <div className={styles.wrapper}>
      <div className={styles["experts-headline"]}>Expert/-innen</div>
      <PlayAllButton
        panelTitle={content.panel.short_title}
        expertStatements={content.expert_statements}
      />
      {content.expert_statements.map((expert) => (
        <Statement
          key={expert.statement.id}
          expert={expert}
          panelTitle={content.panel.short_title}
        />
      ))}
    </div>
  </div>
);

export default PanelContent;
