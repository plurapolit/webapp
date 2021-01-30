import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import styles from "./HomeHeader.module.scss";
import Spotify from "../../../assets/images/spotify.svg";
import Apple from "../../../assets/images/apple-podcast.svg";
import Google from "../../../assets/images/google.svg";
import Overcast from "../../../assets/images/overcast.svg";

const SPOTIFY_LINK = "https://podcast.plurapolit.de/spotify";
const APPLE_LINK = "https://podcast.plurapolit.de/apple";
const GOOGLE_LINK = "https://podcast.plurapolit.de/google";
const OVERCAST_LINK = "https://podcast.plurapolit.de/overcast";

const PodcastLinks = () => (
  <div className={styles["podcast"]}>
    <div className={styles["podcast-subtext"]}>Jetzt auch als Podcast verfügbar.</div>
    <div className={styles["podcast-icon-wrapper"]}>
      <a href={SPOTIFY_LINK} target="_blank" rel="noopener noreferrer">
        <div className={[styles["podcast-icon"], styles["podcast-icon-spotify"]].join(" ")}>
          <img src={Spotify} alt="spotify-podcast-icon" className={styles["podcast-icon-size"]} />
        </div>
      </a>
      <a href={APPLE_LINK} target="_blank" rel="noopener noreferrer">
        <div className={[styles["podcast-icon"], styles["podcast-icon-apple"]].join(" ")}>
          <img src={Apple} alt="apple-podcast-icon" className={styles["podcast-icon-size"]} />
        </div>
      </a>
      <a href={GOOGLE_LINK} target="_blank" rel="noopener noreferrer">
        <div className={[styles["podcast-icon"], styles["podcast-icon-google"]].join(" ")}>
          <img src={Google} alt="google-podcast-icon" className={styles["podcast-icon-size"]} />
        </div>
      </a>
      <a href={OVERCAST_LINK} target="_blank" rel="noopener noreferrer">
        <div className={[styles["podcast-icon"], styles["podcast-icon-overcast"]].join(" ")}>
          <img src={Overcast} alt="overcast-podcast-icon" className={styles["podcast-icon-size"]} />
        </div>
      </a>
    </div>
  </div>
);

const HomeHeader = () => (
  <header className={styles["home-header"]}>
    <ContentWrapper>
      <div className={styles["heading"]}>
        Ein Thema.
        <br />
        9 Meinungen.
        <br />
        <span className={styles["heading-accent"]}>Was denkst du?</span>
      </div>
    </ContentWrapper>
    <PodcastLinks />
  </header>
);

export default HomeHeader;
