import React, { useState, useContext } from "react";
import { If, Then } from "react-if";

import { PlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import LikeButton from "../../../components/LikeButton/LikeButton";
import JwtApi from "../../../api/JwtApi";
import Notification from "../../../helper/NotificationHelper";
import Time from "../../../helper/TimeHelper";
import Helper from "./CommentHelper";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import SignInComponent from "../../../components/SignInComponent/SignInComponent";

import likeBadge from "../../../assets/images/like-badge.svg";
import audioWave from "../../../assets/images/sound-wave.svg";
import playButton from "../../../assets/images/play.svg";

import styles from "./Comment.module.scss";

const Comment = ({
  commentData,
  setAnswered,
}) => {
  const [liked, setLiked] = useState(commentData.likes.liked_by_current_user);
  const [likes, setLikes] = useState(commentData.likes.total_likes);
  const modal = useContext(ModalContext);
  const { setSong } = useContext(PlayerContext);

  const handleLikeClick = async () => {
    const valid = await JwtApi.validate();
    if (!valid) {
      modal.showContent(
        <SignInComponent routeBack={modal.closeModal} onLinkClick={modal.closeModal} />,
      );
      return Notification.warning(
        "Um diesen Service nutzen zu können, musst du dich anmelden",
      );
    }
    if (liked) {
      Helper.removeLike(commentData.comment.id);
      setLikes((prevLikes) => prevLikes - 1);
      return setLiked(false);
    }
    Helper.addLike(commentData.comment.id);
    setLikes((prevLikes) => prevLikes + 1);
    return setLiked(true);
  };

  if (commentData.user.role === "expert") {
    setAnswered(true);
  }

  const Audio = () => (
    <div className={styles["audio"]}>
      <div
        className={[styles["audio-icon"], commentData.user.role === "expert" && styles["audio-icon--expert"]].join(" ")}
        onClick={() => setSong(
          commentData.audio_file.file_link,
          commentData.user.full_name,
        )}
      >
        <img
          alt="icon"
          src={playButton}
          className={styles["audio-icon_img"]}
        />
      </div>
      <div className={styles["audio-info"]}>
        <div className={styles["audio-info_duration"]}>
          <img
            alt="icon"
            src={audioWave}
            className={styles["audio-info_duration_img"]}
          />
          {Time.getDurationInSeconds(commentData.audio_file.duration_seconds)}
        </div>
        <div className={styles["audio-info_date"]}>
          {Time.getDateOrTime(commentData.comment.created_at)}
        </div>
      </div>
    </div>
  );

  const Statement = () => (
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

  const Like = () => (
    <div className={styles["like"]}>
      <If condition={commentData.likes.most_liked_comment}>
        <Then>
          <img src={likeBadge} alt="am meisten gemochte Antwort" className={styles["batch"]} />
        </Then>
      </If>
      <div className={styles["like_container"]}>
        <div className={`${styles["like_count"]} ${liked ? styles["like_count--liked"] : null}`}>
          {likes}
        </div>
        <LikeButton liked={liked} handleLikeClick={handleLikeClick} />
      </div>
    </div>
  );

  return (
    <div className={styles["comment"]}>
      <If condition={commentData.user.role === "expert"}>
        <Then>
          <div className={styles["answer-mark"]}>
            Antwort
          </div>
        </Then>
      </If>
      <div className={styles["card"]}>
        {Audio()}
        {Statement()}
        {Like()}
      </div>
    </div>
  );
};

export default Comment;
