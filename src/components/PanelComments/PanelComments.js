import React, { useState } from 'react';
import moment from 'moment';

import styles from './PanelComments.module.scss';
import activeLikeButton from '../../media/images/likeActive.svg';
import likeButton from '../../media/images/like.svg';
import playButton from '../../media/images/play.svg';
import audioWave from '../../media/images/sound-wave.svg';
import closeButton from '../../media/images/close.svg';
import CommentModal from '../CommentModal/CommentModal';

const PanelComments = ({ closeComments, comments, setSong, statementId }) => {
  const [isLiked, setIsLiked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CommentModal isOpen={isModalOpen} closeModal={closeModal} statementId={statementId} />
      <div className={styles['comments-wrapper']}>
        <div className={styles['comments-card-wrapper']}>
          {comments.comments.map(comment => {
            return (
              <div className={styles["comments-card"]}>
                <div className={styles["comments-panels"]}>
                  <div className={styles["comments-panels-play"]} onClick={() => setSong(comment.audio_file.file_link)}>
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
                    {moment
                      .utc(
                        moment
                          .duration(
                            comment.audio_file.duration_seconds,
                            "seconds"
                          )
                          .asMilliseconds()
                      )
                      .format("mm:ss")}
                  </div>
                  <div className={styles["comments-panels-likes"]}>
                    {comment.likes.total_likes} {comment.likes.total_likes === 1 ? 'Like' : 'Likes'}
                  </div>
                </div>
                <div className={styles["comments-content"]}>
                  <div className={styles["comments-content-user"]}>
                    {comment.user.full_name}
                  </div>
                  <div className={styles["comments-content-statement"]}>
                          &ldquo;{comment.comment.quote}&rdquo;
                  </div>
                </div>
                <div className={styles["comments-like"]}>
                  {/* // TODO: implement like function */}
                  <img
                    alt="icon"
                    src={comment.likes.liked_by_current_user ? activeLikeButton : likeButton}
                    className={styles["comments-like-img"]}
                  />
                </div>
              </div>
            );
          })}
          <div
            className={styles['comments-comment']}
            onClick={() => openModal()}
          >
            Beitrag kommentieren ...
          </div>
        </div>
        <img alt="icon" src={closeButton} className={styles['comments-close']} onClick={closeComments} />
      </div>
    </>
  );
};

export default PanelComments;
