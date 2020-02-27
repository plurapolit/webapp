import React from "react";
import { If } from "react-if";

import LikeButton from "../../../../components/LikeButton/LikeButton";

import likeBadge from "../../../../assets/images/like-badge.svg";

import styles from "./Like.module.scss";

const Like = ({
  commentData,
  likes,
  liked,
  handleLikeClick,
}) => (
  <div className={styles["like"]}>
    <If condition={commentData.likes.most_liked_comment}>
      <img src={likeBadge} alt="am meisten gemochte Antwort" className={styles["like-batch"]} />
    </If>
    <div className={styles["like_container"]}>
      <div className={`${styles["like_count"]} ${liked ? styles["like_count--liked"] : null}`}>
        {likes}
      </div>
      <LikeButton liked={liked} handleLikeClick={handleLikeClick} />
    </div>
  </div>
);

export default Like;
