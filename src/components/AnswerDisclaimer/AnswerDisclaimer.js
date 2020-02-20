import React from "react";
import { If } from "react-if";

import styles from "./AnswerDisclaimer.module.scss";
import Time from "../../helper/Time";

const AnswerDisclaimer = ({
  expertFullName,
  statementDate,
  commentLength,
}) => {
  const THREE_WEEKS = 21;
  const HIDE_AFTER_PUBLISHING_IN_DAYS = 0;
  const commentsExistAndDisclaimerShouldNotBeHidden = () => (
    commentLength > 0 && Time.isDaysAway(statementDate, HIDE_AFTER_PUBLISHING_IN_DAYS)
  );

  return (
    <If condition={commentsExistAndDisclaimerShouldNotBeHidden}>
      <div className={styles["disclaimer"]}>
        <span>{expertFullName}</span>
        &nbsp; wird am &nbsp;
        <span>{Time.getDateInDays(statementDate, THREE_WEEKS)}</span>
        &nbsp; aufgefordert, auf den Kommentar mit den meisten Likes zu antworten.
      </div>
    </If>
  );
};

export default AnswerDisclaimer;
