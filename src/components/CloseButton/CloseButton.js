import React from 'react';

import styles from './CloseButton.module.scss';

const CloseButton = ({ onClick = () => {} }) => {
  return (
    <div className={styles["close"]} onClick={onClick} />
  );
};

export default CloseButton;
