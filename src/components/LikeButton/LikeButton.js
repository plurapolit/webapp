import React from 'react';
import styles from './LikeButton.module.scss';
import activeLikeButton from '../../media/images/likeActive.svg';
import likeButton from '../../media/images/like.svg';


const LikeButton = ({ liked, handleLikeClick}) => {

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
