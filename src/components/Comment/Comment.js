import React, { useState } from "react";
import moment from "moment";

import LikeButton from "../LikeButton/LikeButton";
import LikeApi from "../../api/LikeApi";
import JwtApi from "../../api/JwtApi";
import Notification from "../../helper/Notification";
import { getDateOrTime } from "../../helper/helper";

import likeBadge from "../../media/images/like-badge.svg";
import audioWave from "../../media/images/sound-wave.svg";
import playButton from "../../media/images/play.svg";

import styles from "./Comment.module.scss";

const Comment = ({ commentData, setSong }) => {
  const [liked, setLiked] = useState(commentData.likes.liked_by_current_user);

  const audioDuration = (audioFile) => moment
    .utc(
      moment.duration(audioFile.duration_seconds, "seconds").asMilliseconds(),
    )
    .format("mm:ss");

  const like = async () => {
    LikeApi.post(commentData.comment.id);
  };

  const dislike = async () => {
    LikeApi.delete(commentData.comment.id);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeClick = async () => {
    const valid = await JwtApi.validate();
    if (!valid) {
      return Notification.warning(
        "Um diesen Service nutzen zu können, musst du dich anmelden",
      );
    }

    if (liked) {
      dislike();
    } else {
      like();
    }
    return toggleLike();
  };

  const numberOfLikes = (totalLikes) => {
    let likeAmount;
    const currentUserLikeFetched = commentData.likes.liked_by_current_user;
    if (!currentUserLikeFetched && liked) {
      likeAmount = totalLikes + 1;
    } else if (currentUserLikeFetched && !liked) {
      likeAmount = totalLikes - 1;
    } else {
      likeAmount = totalLikes;
    }
    return (
      <div className={styles["comments-panels-likes"]}>
        {likeAmount}
        {likeAmount === 1 ? " Like" : " Likes"}
      </div>
    );
  };

  const commentQuote = (quote) => (
    <div className={styles["comments-content-statement"]}>
      &ldquo;
      {quote}
      &rdquo;
    </div>
  );

  return (
    <div>
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
            {audioDuration(commentData.audio_file)}
          </div>
          {numberOfLikes(commentData.likes.total_likes)}
        </div>
        <div className={styles["comments-content"]}>
          <div>
            <div className={styles["comments-content_heading"]}>
              <div className={styles["comments-content-user"]}>
                {commentData.user.full_name}
              </div>
              <div className={styles["comments-content_image-anker"]}>
                <img src={likeBadge} alt="am meisten gemochte Antwort" className={styles["comments-content_image"]} />
              </div>
            </div>
            {commentQuote(commentData.comment.quote)}
          </div>
          <div className={styles["comments-content_bottom"]}>
            <div className={styles["comments-content_bottom_container"]}>
              <div className={styles["comments-content_date"]}>
                {getDateOrTime(moment(commentData.comment.created_at))}
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
