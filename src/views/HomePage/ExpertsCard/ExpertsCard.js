import React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";

import styles from "./ExpertsCard.module.scss";

const ExpertsCard = ({ experts }) => {
  const url = process.env.REACT_APP_BUCKET_URL;
  const speakerImage = `${url}/${experts.avatar}`;
  const speakerOrganisation = `${url}/${experts.organisation_avatar}`;

  return (
    <div className={styles["speaker-image-wrapper"]}>
      <LazyLoad offset={500} once>
        <Img
          src={speakerImage}
          className={styles["speaker-image"]}
          alt={experts.full_name}
          loader={<p>Loading</p>}
        />
        <Img
          alt={experts.organisation_name}
          src={speakerOrganisation}
          className={styles["organisation-logo"]}
          loader={<p>Loading</p>}
        />
      </LazyLoad>
    </div>
  );
};

export default ExpertsCard;
