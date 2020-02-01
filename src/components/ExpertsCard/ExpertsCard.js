import React from 'react';

import styles from './ExpertsCard.module.scss';

const ExpertsCard = ({ experts }) => {
  const url = process.env.REACT_APP_BUCKET_URL;
  const speakerImage = `${url}/${experts.avatar}`;
  const speakerOrganisation = `${url}/${experts.organisation_avatar}`;

  return (
    <div className={styles["ExpertsCard"]}>
      <img src={speakerImage} className={styles["speaker-image"]} alt={experts.full_name} />
      <img src={speakerOrganisation} className={styles["image-placeholder"]} />
    </div>
  );
};

export default ExpertsCard;
