import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './PanelComments.module.scss';

import CommentModal from '../CommentModal/CommentModal';
import LikeButton from '../LikeButton/LikeButton';
import audioWave from '../../media/images/sound-wave.svg';
import closeButton from '../../media/images/close.svg';
import microphoneButton from '../../media/images/microphone.svg';
import playButton from '../../media/images/play.svg';
import CommentApi from '../../api/CommentApi';


const PanelComments = ({
  toggleComments, setSong, statementId, stopPlayer,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userComments, setUserComments] = useState(null);

  const fetchUserComments = async () => {
    await CommentApi.getComments(statementId)
      .then((res) => res.json())
      .then((json) => setUserComments(json));
  };

  useEffect(() => {
    fetchUserComments();
  }, []);

  const openModal = () => {
    stopPlayer();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const audioDuration = (comment) => (
    moment.utc(
      moment.duration(
        comment.audio_file.duration_seconds, 'seconds',
      ).asMilliseconds(),
    ).format('mm:ss')
  );

  const numberOfLikes = (totalLikes) => (
    <div className={styles["comments-panels-likes"]}>
      {totalLikes}
      {totalLikes === 1 ? ' Like' : ' Likes'}
    </div>
  );

  const commentQuote = (quote) => (
    <div className={styles["comments-content-statement"]}>
      &ldquo;
      {quote}
      &rdquo;
    </div>
  );

  const commentCta = () => (
    <div
      className={styles['comments-comment']}
      onClick={() => openModal()}
    >
      <img alt="icon" src={microphoneButton} className={styles['comments-microphone-img']} />
      <div className={styles['comments-comment-text']}>Beitrag kommentieren</div>
    </div>
  );

  if (userComments) {
    return (
      <div>
        <CommentModal isOpen={isModalOpen} closeModal={closeModal} statementId={statementId} />
        <div className={styles['comments-wrapper']}>
          <div className={styles['comments-card-wrapper']}>
            {userComments.comments.map((comment) => (
              <div key={comment.comment.id} className={styles["comments-card"]}>
                <div className={styles["comments-panels"]}>
                  <div
                    className={styles["comments-panels-play"]}
                    onClick={() => setSong(comment.audio_file.file_link, comment.user.full_name)}
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
                    {audioDuration(comment)}
                  </div>
                  {numberOfLikes(comment.likes.total_likes)}
                </div>
                <div className={styles["comments-content"]}>
                  <div className={styles["comments-content-user"]}>
                    {comment.user.full_name}
                  </div>
                  {commentQuote(comment.comment.quote)}
                </div>
                <LikeButton
                  isLiked={comment.likes.liked_by_current_user}
                  commentId={comment.comment.id}
                />
              </div>
            ))}
            {commentCta()}
          </div>
          <img alt="icon" src={closeButton} className={styles['comments-close']} onClick={() => toggleComments()} />
        </div>
      </div>
    );
  }
  return null;
};

export default PanelComments;
