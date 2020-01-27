import React from 'react';

import styles from './ExpertsCard.module.scss';

const ExpertsCard = ({ experts }) => {
  console.log('expert', experts);
  const url = process.env.REACT_APP_BUCKETNAME;
  const imageURL = `${url}/${experts.avatar}`;

  return (
      <img className={styles["speaker"]} src={imageURL} alt={experts.full_name}/>
  );
}

export default ExpertsCard;