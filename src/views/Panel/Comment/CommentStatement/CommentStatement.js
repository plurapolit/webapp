import React from "react";

import styles from "./CommentStatement.module.scss";

const Statement = ({ commentData }) => (
  <div className={styles["statement"]}>
    <div className={styles["statement_username"]}>
      {commentData.user.full_name}
    </div>
    <div className={styles["statement_comment"]}>
      &ldquo;
      {commentData.comment.quote}
      &rdquo;
    </div>
  </div>
);

export default Statement;
