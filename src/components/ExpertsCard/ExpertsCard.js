import React from "react";

import styles from "./ExpertsCard.module.scss";

const ExpertsCard = ({ experts }) => {
  const url = process.env.REACT_APP_BUCKET_URL;
  const speakerImage = `${url}/${experts.avatar}`;
  const speakerOrganisation = `${url}/${experts.organisation_avatar}`;

  return (
    <div className={styles["speaker-image-wrapper"]}>
      <img
        src={speakerImage}
        className={styles["speaker-image"]}
        alt={experts.full_name}
      />
      <img
        alt={experts.organisation_name}
        src={speakerOrganisation}
        className={styles["organisation-logo"]}
      />
    </div>
  );
};

export default ExpertsCard;
