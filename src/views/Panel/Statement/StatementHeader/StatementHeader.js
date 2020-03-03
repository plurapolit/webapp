import React from "react";

import TwitterButton from "../../../../components/TwitterButton/TwitterButton";

import styles from "./StatementHeader.module.scss";

const StatementHeader = ({ expert }) => {
  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

  const avatar = () => {
    const image = (
      <img
        src={`${IMAGEROOTURL}/${expert.user_avatar_key}`}
        alt={expert.user.full_name}
        className={styles["image"]}
      />
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
