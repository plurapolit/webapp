import React, { useState, useEffect } from "react";
import { If } from "react-if";

import styles from "./Statement.module.scss";

import PanelComments from "../PanelComments/PanelComments";
import StatementHeader from "./StatementHeader/StatementHeader";
import StatementControls from "./StatementControls/StatementControls";

const Statement = ({
  expert,
  panelTitle,
}) => {
  const [commentsAreOpen, setCommentsAreOpen] = useState(false);
  const { number_of_comments: numberOfComments } = expert;

  useEffect(() => {
    const openCommentsIfCommentsAreAvailable = () => {
      if (numberOfComments > 0) {
        setCommentsAreOpen(true);
      }
    };
    openCommentsIfCommentsAreAvailable();
  }, [numberOfComments]);

  const toggleComments = () => {
    setCommentsAreOpen((currentState) => !currentState);
  };

  return (
    <div className={styles["statement-comment-container"]} data-test="statement">
      <div className={styles["card"]}>
        <StatementHeader expert={expert} />
        <div className={styles["quote"]}>
          {`"${expert.statement.quote}"`}
        </div>
        <StatementControls
          expert={expert}
          panelTitle={panelTitle}
          toggleComments={toggleComments}
        />
      </div>
      <If condition={commentsAreOpen}>
        <PanelComments
          toggleComments={toggleComments}
          statementId={expert.statement.id}
          expertFullName={expert.user.full_name}
          statementDate={expert.statement.created_at}
          panelTitle={panelTitle}
        />
      </If>
    </div>
  );
};

export default Statement;
