import React, { useState } from "react";
import { If } from "react-if";

import styles from "./Statement.module.scss";

import PanelComments from "../PanelComments/PanelComments";
import StatementHeader from "./StatementHeader/StatementHeader";
import StatementControls from "./StatementControls/StatementControls";
import { getAnchorFromName } from "../../../helper/StringHelper";

const Statement = ({
  expert,
}) => {
  const [commentsAreOpen, setCommentsAreOpen] = useState(true);
  const [showTranscription, setShowTranscription] = useState(false);

  const toggleComments = () => {
    setCommentsAreOpen((currentState) => !currentState);
  };

  return (
    <div id={getAnchorFromName(expert.user.full_name)} className={styles["statement-comment-container"]} data-test="statement">
      <div className={styles["card"]}>
        <StatementHeader
          expert={expert}
          showTranscription={showTranscription}
          setShowTranscription={setShowTranscription}
        />
        <div className={styles["quote"]}>
          {`"${expert.statement.quote}"`}
        </div>
        <StatementControls
          expert={expert}
          toggleComments={toggleComments}
        />
      </div>
      {showTranscription && !!expert.transcription
        && (
          <div className={styles["transcription"]}>
            {expert.transcription.content}
          </div>
        )}
      <If condition={commentsAreOpen}>
        <PanelComments
          toggleComments={toggleComments}
          statementId={expert.statement.id}
          expertFullName={expert.user.full_name}
          statementDate={expert.statement.created_at}
        />
      </If>
    </div>
  );
};

export default Statement;
