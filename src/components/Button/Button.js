import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({ children, customClass = null, type = 'button', to = undefined }) => {
  const button = (
    <button type={type} className={styles["button"] + ` ${customClass}`}>
      {children}
    </button>
  );

  if (to) {
    return (
      <Link to={to}>
        {button}
      </Link>
    );
  }
  return button;
};

export default Button;
