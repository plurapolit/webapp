import React, { useState } from "react";
import moment from "moment";

import LikeButton from "../LikeButton/LikeButton";
import LikeApi from "../../api/LikeApi";
import JwtApi from "../../api/JwtApi";
import Notification from "../../helper/Notification";

import likeBatch from '../../media/images/like-batch.svg';
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
          <div className={styles["comments-content-user"]}>
            {commentData.user.full_name}
          </div>
          {commentQuote(commentData.comment.quote)}
        </div>
        <img src={likeBatch} alt="meisten Likes" className={styles["comments-content_image"]}></img>
        <LikeButton liked={liked} handleLikeClick={handleLikeClick} />
      </div>
    </div>
  );
};

export default Comment;
