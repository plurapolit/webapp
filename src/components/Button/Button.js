import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, customClass = null, type = 'button' }) => (
  <button type={type} className={styles["button"] + ` ${customClass}`}>
    {children}
  </button>
);

export default Button;
