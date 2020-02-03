import React from 'react';

import styles from './Text.module.scss';

const Text = ({ headline, children }) => (
  <div className={styles["text"]}>
    <p className={styles["headline"]}>
      {headline}
    </p>
    <p>
      {children}
    </p>
  </div>
);

export default Text;
