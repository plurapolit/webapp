import React, { useState, useContext } from "react";

import LikeButton from "../LikeButton/LikeButton";
import JwtApi from "../../api/JwtApi";
import Notification from "../../helper/Notification";
import Time from "../../helper/Time";
import Helper from "./CommentHelper";
import { ModalContext } from "../../layouts/Modal/ModalContext";
import SignInComponent from "../SignInComponent/SignInComponent";

import likeBadge from "../../media/images/like-badge.svg";
import audioWave from "../../media/images/sound-wave.svg";
import playButton from "../../media/images/play.svg";

import styles from "./Comment.module.scss";

const Comment = ({
  commentData,
  setSong,
  setAnswered,
}) => {
  const [liked, setLiked] = useState(commentData.likes.liked_by_current_user);
  const [likes, setLikes] = useState(commentData.likes.total_likes);
  const modal = useContext(ModalContext);

  const handleLikeClick = async () => {
    const valid = await JwtApi.validate();
    if (!valid) {
      modal.showContent(
        <SignInComponent routeBack={modal.closeModal} />,
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

  return (
    <div className={styles["comment"]}>
      {commentData.user.role === "expert" ? (
        <div className={styles["answer-mark"]}>
          Antwort
        </div>
      ) : null}
      <div className={styles["comments-card"]}>
        <div className={styles["comments-panels"]}>
          <div
            className={styles["comments-panels-play"]}
            onClick={() => setSong(
              commentData.audio_file.file_link,
              commentData.user.full_name,
            )}
          >
            <img
              alt="icon"
              src={playButton}
              className={styles["comments-panels-play-img"]}
            />
          </div>
          <div className={styles["comments-panels-audio"]}>
            <img
              alt="icon"
              src={audioWave}
              className={styles["comments-panels-audio-img"]}
            />
            {Time.getDurationInSeconds(commentData.audio_file.duration_seconds)}
          </div>
          <div className={styles["comments-panels-audio-date"]}>
            {Time.getDateOrTime(commentData.comment.created_at)}
          </div>
        </div>
        <div className={styles["comments-content"]}>
          <div>
            <div className={styles["comments-content_heading"]}>
              <div className={styles["comments-content-user"]}>
                {commentData.user.full_name}
              </div>
              {commentData.likes.most_liked_comment ? (
                <div className={styles["comments-content_image-anker"]}>
                  <img src={likeBadge} alt="am meisten gemochte Antwort" className={styles["comments-content_image"]} />
                </div>
              ) : null}
            </div>
            <div className={styles["comments-content-statement"]}>
              &ldquo;
              {commentData.comment.quote}
              &rdquo;
            </div>
          </div>
          <div className={styles["comments-content_bottom"]}>
            <div className={styles["comments-content_bottom_container"]}>
              <div className={styles["comments-content_like"]}>
                <div className={`${styles["comments-panels-likes"]} ${liked ? styles["comments-panels-likes--liked"] : null}`}>
                  {likes}
                </div>
              </div>
              <LikeButton liked={liked} handleLikeClick={handleLikeClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
