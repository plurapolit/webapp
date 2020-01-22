import React, { useRef, useEffect } from 'react';
import styles from './QuestionBanner.module.scss';

const QuestionBanner = ({ category, text, imageUrl }) => {
  const refBanner = useRef(null);

  useEffect(() => {
    refBanner.current.style.setProperty('--url', `url(${imageUrl})`);
  }, [])

  return (
    <div ref={refBanner} className={styles["question-banner"]}>
      <div className={styles["category"]}>{category}</div>
      <div className={styles["text"]}>{text}</div>
    </div>
  );
};

export default QuestionBanner;