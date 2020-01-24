import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './PanelCard.module.scss';

const PanelCard = ({ title, imageUrl, color, avatars, shortTitle, slug }) => {
  const refCard = useRef(null);

  useEffect(() => {
    refCard.current.style.setProperty('--url', `url(${imageUrl})`);
    refCard.current.style.setProperty('--color', `${color}`);
  }, []);

  return (
    <Link to={`${slug}`}>
      <div ref={refCard} className={styles["question-banner"]}>
        <div className={styles["image-wrapper"]}>
          <div className={styles["shortTitle"]}>{shortTitle}</div>
        </div>
        <div className={styles["detail-wrapper"]}>
          <div className={styles["title"]}>{title}</div>
          <div className={styles["avatar-wrapper"]}>
            <p>Hello</p>
            <p>there</p>
            <p>there</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PanelCard;
