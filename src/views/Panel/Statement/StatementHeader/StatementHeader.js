import React from "react";
import { If } from "react-if";
import Img from "react-image";
import LazyLoad from "react-lazyload";

import defaultProfileImageUrl from "../../../../assets/images/default-profile.svg";
import styles from "./StatementHeader.module.scss";
import { ImgixApiUrlParameters } from "../../../../helper/ImageDeliveryHelper";
import NotificationHelper from "../../../../helper/NotificationHelper";

import Dropdown from "../../../../components/Dropdown/Dropdown";
import { ReactComponent as Twitter } from "../../../../assets/images/Twitter_Logo.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook-icon.svg";
import { ReactComponent as LinkedIn } from "../../../../assets/images/linkedin-icon.svg";
import { ReactComponent as Website } from "../../../../assets/images/website-icon.svg";
import { ReactComponent as Transcript } from "../../../../assets/images/transcript-image.svg";
import { getAnchorFromName } from "../../../../helper/StringHelper";
import { createFunction, pipe } from "../../../../helper/FunctionalProgrammingHelper";

const getPossibleWeblinks = (user) => [
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

const getShareLink = (expert) => {
  const addPath = createFunction((baseUrl) => `${baseUrl}${window.location.pathname}`);
  const addAnchor = createFunction((url) => `${url}#${getAnchorFromName(expert.user.full_name)}`);
  const shareLink = pipe(
    addPath,
    addAnchor,
  )("localhost:3000");
  return shareLink;
};

const saveShareLinkInClipBoard = (expert) => {
  navigator.clipboard.writeText(getShareLink(expert)).then(
    () => NotificationHelper.success("Der Link wurde in der Zwischenablage gespeichert.")
  );
};

const StatementHeader = ({
  expert,
  setShowTranscription,
  showTranscription,
}) => {
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
  getPossibleWeblinks(expert.user).forEach(((socialMedia) => {
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
  if (expert.transcription) {
    dropdownItems.push(
      {
        text: showTranscription ? "Transkript schließen" : "Transkript",
        icon: Transcript,
        onClick: () => setShowTranscription((prevToggle) => !prevToggle),
      },
    );
  }

  if (expert.user) {
    dropdownItems.push(
      {
        text: "Kopiere Link",
        icon: Transcript,
        onClick: () => saveShareLinkInClipBoard(expert),
      },
    );
  }

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
