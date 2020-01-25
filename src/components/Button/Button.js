import React from 'react';

import styles from './Button.module.scss';

const Button = ({ label, customClass }) => {
  return (
    <button className={styles["button"] + ` ${customClass}`}>
      {label}
    </button>
  );
}

export default Button;