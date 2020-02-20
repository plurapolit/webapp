import React from "react";

import styles from "./AnswerDisclaimer.module.scss";
import Time from "../../helper/Time";

const AnswerDisclaimer = ({
  expertFullName,
  statementDate,
  commentLength,
}) => {
  const showAfterNDays = 0;

  if (commentLength > 0 && Time.isDaysAway(statementDate, showAfterNDays)) {
    return (
      <div className={styles["disclaimer"]}>
        <span>{expertFullName}</span>
        &nbsp; wird am &nbsp;
        <span>{Time.getDateInDays(statementDate, 21)}</span>
        &nbsp; aufgefordert, auf den Kommentar mit den meisten Likes zu antworten.
      </div>
    );
  }
  return null;
};

export default AnswerDisclaimer;
