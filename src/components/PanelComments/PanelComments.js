import React, { useState } from 'react';
import moment from 'moment';

import styles from './PanelComments.module.scss';
import activeLikeButton from '../../media/images/likeActive.svg';
import likeButton from '../../media/images/like.svg';
import playButton from '../../media/images/play.svg';
import audioWave from '../../media/images/sound-wave.svg';
import closeButton from '../../media/images/close.svg';
import microphoneButton from '../../media/images/microphone.svg';
import CommentModal from '../CommentModal/CommentModal';
import LikeApi from '../../api/LikeApi';
import JwtApi from '../../api/JwtApi';
import Notification from '../../helper/Notification';

const PanelComments = ({
  closeComments, comments, setSong, statementId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const like = async () => {
    const valid = await JwtApi.validate();
    if (valid) {
      LikeApi.post(statementId);
    }
    Notification.warning('Um diesen Service nutzen zu können, musst du dich anmelden');
    // TODO: Error handling in einer seperaten Funktion auslagern und mit signin modal verbinden.
  };

  const disLike = async () => {
    const valid = await JwtApi.validate();
    if (valid) {
      LikeApi.delete(statementId);
    }
    Notification.warning('Um diesen Service nutzen zu können, musst du dich anmelden');
  };

  const audioDuration = (comment) => (
    moment.utc(
      moment.duration(
        comment.audio_file.duration_seconds, 'seconds',
      ).asMilliseconds(),
    ).format('mm:ss')
  );

  return (
    <>
      <CommentModal isOpen={isModalOpen} closeModal={closeModal} statementId={statementId} />
      <div className={styles['comments-wrapper']}>
        <div className={styles['comments-card-wrapper']}>
          {comments.comments.map((comment) => (
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
                <div className={styles["comments-panels-likes"]}>
                  {comment.likes.total_likes}
                  {comment.likes.total_likes === 1 ? ' Like' : ' Likes'}
                </div>
              </div>
              <div className={styles["comments-content"]}>
                <div className={styles["comments-content-user"]}>
                  {comment.user.full_name}
                </div>
                <div className={styles["comments-content-statement"]}>
                    &ldquo;
                  {comment.comment.quote}
                    &rdquo;
                </div>
              </div>
              <div className={styles["comments-like"]}>
                {/* // TODO: implement like function */}
                <img
                  alt="icon"
                  src={comment.likes.liked_by_current_user ? activeLikeButton : likeButton}
                  className={styles["comments-like-img"]}
                  onClick={comment.likes.liked_by_current_user ? () => disLike() : () => like()}
                />
              </div>
            </div>
          ))}
          <div
            className={styles['comments-comment']}
            onClick={() => openModal()}
          >
            <img alt="icon" src={microphoneButton} className={styles['comments-microphone-img']} />
            <div className={styles['comments-comment-text']}>Beitrag kommentieren</div>
          </div>
        </div>
        <img alt="icon" src={closeButton} className={styles['comments-close']} onClick={closeComments} />
      </div>
    </>
  );
};

export default PanelComments;
