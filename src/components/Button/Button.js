import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

// TODO: add button types button primary ...

const Button = ({ children, customClass = null, type = 'button', to = undefined, onClick = () => {} }) => {
  const button = (
    <button type={type} className={styles["button"] + ` ${customClass}`} onClick={onClick}>
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
