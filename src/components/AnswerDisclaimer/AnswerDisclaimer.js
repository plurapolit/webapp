import React from "react";

import styles from "./AnswerDisclaimer.module.scss";
import Time from "../../helper/Time";

const AnswerDisclaimer = ({
  expertFullName,
  statementDate,
  commentLength,
}) => {
  if (commentLength > 0 && Time.isDaysAway(statementDate, 7)) {
    return (
      <div className={styles["disclaimer"]}>
        <span>{expertFullName}</span>
        &nbsp; antwortet bis zum &nbsp;
        <span>{Time.getDateInDays(statementDate, 21)}</span>
        &nbsp; auf das best bewertete Kommentar.
      </div>
    );
  }
  return null;
};

export default AnswerDisclaimer;
