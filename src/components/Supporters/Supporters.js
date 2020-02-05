import React from 'react';

import styles from './Supporters.module.scss';
import Sample from './images/sample.png';

const Supporters = () => (
  <div className={styles["container"]}>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Sample} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Sample} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Sample} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Sample} alt="sample-logo" />
    </div>
  </div>
);

export default Supporters;
