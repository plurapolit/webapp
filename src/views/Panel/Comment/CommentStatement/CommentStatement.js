import React from "react";
import { If, Then, Else } from "react-if";
import TextComment from "../../TextComment/TextComment";

import styles from "./CommentStatement.module.scss";

const Statement = ({ commentData }) => (
  <div className={styles["statement"]}>
    <div className={styles["statement_username"]}>
      {commentData.user.full_name}
    </div>
    <div className={styles["statement_comment"]}>
      <If condition={!!commentData.text_record}>
        <Then>
          <TextComment textRecord={commentData.text_record} />
        </Then>
        <Else>
          &ldquo;
          {commentData.comment.quote}
          &rdquo;
        </Else>
      </If>
    </div>
  </div>
);

export default Statement;
