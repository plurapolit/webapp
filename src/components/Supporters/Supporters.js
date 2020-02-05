import React from 'react';

import styles from './Supporters.module.scss';
import LPB from './images/lpb-hh.jpg';
import StartupIncubator from './images/startup-incubator.jpg';
import Partner1 from './images/sib-partner1.jpg';
import Partner2 from './images/sib-partner2.jpg';
import Partner3 from './images/sib-partner3.jpg';

const Supporters = () => (
  <div className={styles["container"]}>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={StartupIncubator} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={LPB} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner1} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner2} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner3} alt="sample-logo" />
    </div>
  </div>
);

export default Supporters;
