import React from "react";
import { If } from "react-if";
import Img from "react-image";
import LazyLoad from "react-lazyload";

import TwitterButton from "../../../../components/TwitterButton/TwitterButton";
import defaultProfileImageUrl from "../../../../assets/images/default-profile.svg";
import styles from "./StatementHeader.module.scss";
import { ImgixApiUrlParameters } from "../../../../helper/ImageDeliveryHelper";

import Dropdown from "../../../../components/Dropdown/Dropdown";
import { ReactComponent as Twitter } from "../../../../assets/images/Twitter_Logo.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook-icon.svg";
import { ReactComponent as LinkedIn } from "../../../../assets/images/linkedin-icon.svg";
import { ReactComponent as Website } from "../../../../assets/images/website-icon.svg";

const getPossibleDropdownItems = (user) => [
  {
    text: "Twitter",
    icon: Twitter,
    link: user.twitter_handle,
  },
  {
    text: "Facebook",
    icon: Facebook,
    link: user.facebook_handle,
  },
  {
    text: "LinkedIn",
    icon: LinkedIn,
    link: user.linkedin_handle,
  },
  {
    text: "Webseite",
    icon: Website,
    link: user.website_link,
  },
];


const StatementHeader = ({ expert }) => {
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
          src={`${expert.user_avatar}${ImgixApiUrlParameters(80)}`}
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

  const dropdownItems = [];
  getPossibleDropdownItems(expert.user).forEach(((socialMedia) => {
    if (socialMedia.link) {
      dropdownItems.push(
        {
          text: socialMedia.text,
          icon: socialMedia.icon,
          onClick: () => window.open(socialMedia.link),
        },
      );
    }
  }));

  return (
    <div className={styles["header"]}>
      {avatar()}
      <div className={styles["user-info"]}>
        <h3 className={styles["name"]}>
          {expert.user.full_name}
        </h3>
        <div className={styles["organisation"]}>
          {expert.organisation.name}
        </div>
        <div className={styles["biography"]}>
          {expert.user.biography}
        </div>
      </div>
      <If condition={dropdownItems.length > 0}>
        <Dropdown items={dropdownItems} style={{ marginRight: ".5rem", marginTop: ".5rem" }} />
      </If>
    </div>
  );
};

export default StatementHeader;
