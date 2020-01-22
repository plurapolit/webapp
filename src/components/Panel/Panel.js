import React from 'react';
import styles from './Panel.module.scss';

const Panel = ({ img, headline, partei, desc, webpage }) => {

  return (
    <div className={styles["panel"]}>
      <div className={styles["image"]}>{img}</div>
      <div>
        <div className={styles["headline"]}>{headline}</div>
        <div className={styles["partei"]}>{partei}</div>
        <div className={styles["description"]}>{desc}</div>
        <a href="#" className={styles["webpage"]}>{webpage}</a>
      </div>
    </div>
  );
}

export default Panel; 