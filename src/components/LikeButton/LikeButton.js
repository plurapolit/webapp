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
    LikeApi.post(commentId);
  };

  const dislike = async () => {
    LikeApi.delete(commentId);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeClick = async () => {
    const valid = await JwtApi.validate();
    if (!valid) {
      return Notification.warning('Um diesen Service nutzen zu können, musst du dich anmelden');
    }

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
