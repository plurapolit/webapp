import React, { useState } from 'react';
import moment from 'moment';
import styles from './PanelComments.module.scss';
import activeLikeButton from '../../media/images/likeActive.svg';
import likeButton from '../../media/images/like.svg';
import playButton from '../../media/images/play.svg';
import audioWave from '../../media/images/sound-wave.svg';
import closeButton from '../../media/images/close.svg';

const PanelComments = ({ showUserComments }) => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className={styles['comments-wrapper']}>
      <div className={styles['comments-card-wrapper']}>
        <div className={styles['comments-card']}>
          <div className={styles['comments-panels']}>
            <div className={styles['comments-panels-play']}>
              <img
                alt="icon"
                src={playButton}
                className={styles['comments-panels-play-img']}
              />
            </div>
            <div className={styles['comments-panels-audio']}>
              <img
                alt="icon"
                src={audioWave}
                className={styles['comments-panels-audio-img']}
              />
              {moment
                .utc(moment.duration(90, 'seconds').asMilliseconds())
                .format('mm:ss')}
            </div>
            <div className={styles['comments-panels-likes']}>13 Likes</div>
          </div>
          <div className={styles['comments-content']}>
            <div className={styles['comments-content-user']}>Jonas Gruner</div>
            <div className={styles['comments-content-statement']}>
              &ldquo;It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout.&rdquo;
            </div>
          </div>
          <div className={styles['comments-like']}>
            <img
              alt="icon"
              src={isLiked ? activeLikeButton : likeButton}
              className={styles['comments-like-img']}
            />
          </div>
        </div>
        <div
          className={styles['comments-comment']}
          onClick={() => console.log('Eddie, your turn! :)')}
        >
          Beitrag kommentieren ...
        </div>
      </div>
      <img alt="icon" src={closeButton} className={styles['comments-close']} onClick={showUserComments} />
    </div>
  );
};

export default PanelComments;
