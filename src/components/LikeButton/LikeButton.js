import React, { useState } from 'react';
import styles from './LikeButton.module.scss';
import activeLikeButton from '../../media/images/likeActive.svg';
import likeButton from '../../media/images/like.svg';
import LikeApi from '../../api/LikeApi';
import JwtApi from '../../api/JwtApi';
import Notification from '../../helper/Notification';

const LikeButton = ({ isLiked, commentId }) => {
  const [liked, setLiked] = useState(isLiked);
  const like = async () => {
    const valid = await JwtApi.validate();
    if (valid) {
      LikeApi.post(commentId);
    } else {
      Notification.warning('Um diesen Service nutzen zu können, musst du dich anmelden');
    }
    // TODO: Error handling in einer seperaten Funktion auslagern und mit signin modal verbinden.
  };

  const dislike = async () => {
    const valid = await JwtApi.validate();
    if (valid) {
      LikeApi.delete(commentId);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeClick = () => {
    if (liked) {
      dislike();
    } else {
      like();
    }
    toggleLike();
  };

  return (
    <div className={styles["comments-like"]}>
      <img
        alt="icon"
        src={liked ? activeLikeButton : likeButton}
        className={styles["comments-like-img"]}
        onClick={() => handleLikeClick()}
      />
    </div>
  );
};

export default LikeButton;
