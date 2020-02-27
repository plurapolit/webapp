import React from "react";
import TwitterLogo from "../../assets/images/Twitter_Logo.svg";
import styles from "./TwitterButton.module.scss";

const TwitterButton = ({ handle }) => {
  const link = `https://twitter.com/${handle}`;
  if (handle) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div>
          <img
            src={TwitterLogo}
            alt="twitter-logo"
            className={styles["social-image"]}
          />
        </div>
      </a>
    );
  }
  return null;
};

export default TwitterButton;
