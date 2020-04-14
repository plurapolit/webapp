import React from "react";

import Time from "../../../../helper/TimeHelper";
import commentIcon from "../../../../assets/images/speech-bubble.svg";
import styles from "./CommentText.module.scss";

const Audio = ({ commentData }) => (
  <div className={styles["text"]}>
    <div
      className={[styles["text-icon"], commentData.user.role === "expert" && styles["text-icon--expert"]].join(" ")}
    >
      <img
        alt="icon"
        src={commentIcon}
        className={styles["text-icon_img"]}
      />
    </div>
    <div className={styles["text-info"]}>
      <div className={styles["text-info_date"]}>
        {Time.getDateOrTime(commentData.comment.created_at)}
      </div>
    </div>
  </div>
);

export default Audio;
