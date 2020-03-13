import React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";

import defaultProfileImageUrl from "../../../assets/images/default-profile.svg";
import styles from "./ExpertsCard.module.scss";


const ExpertsCard = ({ experts }) => {
  const url = process.env.REACT_APP_BUCKET_URL;
  const speakerImage = `${url}/${experts.avatar}`;
  const speakerOrganisation = `${url}/${experts.organisation_avatar}`;

  const defaultProfileImage = (
    <img
      src={defaultProfileImageUrl}
      alt="experte"
      className={styles["speaker-image"]}
    />
  );

  return (
    <div className={styles["speaker-image-wrapper"]}>
      <LazyLoad offset={500} once>
        <Img
          src={speakerImage}
          className={styles["speaker-image"]}
          alt={experts.full_name}
          loader={defaultProfileImage}
        />
        <Img
          alt={experts.organisation_name}
          src={speakerOrganisation}
          className={styles["organisation-logo"]}
        />
      </LazyLoad>
    </div>
  );
};

export default ExpertsCard;
