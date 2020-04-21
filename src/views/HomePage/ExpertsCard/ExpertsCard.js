import React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";
import { ImgixApiUrlParameters } from "../../../helper/ImageDeliveryHelper";

import defaultProfileImageUrl from "../../../assets/images/default-profile.svg";
import styles from "./ExpertsCard.module.scss";


const ExpertsCard = ({ experts }) => {
  const defaultProfileImage = (
    <img
      src={defaultProfileImageUrl}
      alt="experte"
      className={styles["speaker-image"]}
    />
  );

  return (
    <div className={styles["speaker-image-wrapper"]}>
      <LazyLoad offset={800} once>
        <Img
          src={`${experts.avatar}${ImgixApiUrlParameters(70)}`}
          className={styles["speaker-image"]}
          alt={experts.full_name}
          loader={defaultProfileImage}
        />
        <Img
          alt={experts.organisation_name}
          src={`${experts.organisation_avatar}${ImgixApiUrlParameters(50)}`}
          className={styles["organisation-logo"]}
        />
      </LazyLoad>
    </div>
  );
};

export default ExpertsCard;
