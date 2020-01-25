import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, customClass = null }) => (
  <button type="button" className={styles["button"] + ` ${customClass}`}>
    {children}
  </button>
);

export default Button;
