import React from "react";
import Img from "react-image";
import LazyLoad from "react-lazyload";

import TwitterButton from "../../../../components/TwitterButton/TwitterButton";
import defaultProfileImageUrl from "../../../../assets/images/default-profile.svg";
import styles from "./StatementHeader.module.scss";

const StatementHeader = ({ expert }) => {
  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

  const defaultProfileImage = (
    <img
      src={defaultProfileImageUrl}
      alt="profile"
      className={styles["image"]}
    />
  );

  const avatar = () => {
    const image = (
      <LazyLoad offset={300} once>
        <Img
          src={`${IMAGEROOTURL}/${expert.user_avatar_key}`}
          alt={expert.user.full_name}
          className={styles["image"]}
          loader={defaultProfileImage}
        />
      </LazyLoad>
    );

    if (expert.user.website_link) {
      return (
        <a href={expert.user.website_link} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      );
    }
    return image;
  };

  return (
    <div className={styles["header"]}>
      {avatar()}
      <div className={styles["user-info"]}>
        <div className={styles["name"]}>
          {expert.user.full_name}
        </div>
        <div className={styles["organisation"]}>
          {expert.organisation.name}
        </div>
        <div className={styles["biography"]}>
          {expert.user.biography}
        </div>
      </div>
      <TwitterButton handle={expert.user.twitter_handle} />
    </div>
  );
};

export default StatementHeader;
