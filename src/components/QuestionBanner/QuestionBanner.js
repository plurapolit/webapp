import React, { useRef, useEffect } from 'react';
import styles from './QuestionBanner.module.scss';

const QuestionBanner = ({ title, imageUrl, color, avatars }) => {
  const refBanner = useRef(null);

  useEffect(() => {
    refBanner.current.style.setProperty('--url', `url(${imageUrl})`);
  }, []);

  return (
    <div ref={refBanner} className={styles["question-banner"]}>
      <div className={styles["text"]}>{title}</div>
    </div>
  );
};

export default QuestionBanner;