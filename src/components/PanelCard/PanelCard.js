import React, { useRef, useEffect } from 'react';

import SpeakerList from '../SpeakerList/SpeakerList';

import styles from './PanelCard.module.scss';

const PanelCard = ({ title, imageUrl, color, avatars, shortTitle }) => {
  const refCard = useRef(null);

  useEffect(() => {
    refCard.current.style.setProperty('--url', `url(${imageUrl})`);
    refCard.current.style.setProperty('--color', `${color}`);
  }, []);

  return (
    <div ref={refCard} className={styles["question-banner"]}>
      <div className={styles["image-wrapper"]}>
        <div className={styles["shortTitle"]}>{shortTitle}</div>
      </div>
      <div className={styles["detail-wrapper"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["avatar-wrapper"]}>
          <SpeakerList />
        </div>
      </div>
    </div>
  );
};

export default PanelCard;
