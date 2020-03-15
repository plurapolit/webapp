import React from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";
import styles from "./PlayAllButton.module.scss";
import playButton from "../../../assets/images/play.svg";
import { createAudioTrackListFromExpertStatements } from "../../../helper/AudioTrackHelper";

const PlayAllButton = ({
  expertStatements,
  panelTitle,
}) => {
  const { setAudioTrackList } = usePlayerContext();
  const audios = createAudioTrackListFromExpertStatements(expertStatements, panelTitle);

  const handleClick = () => {
    setAudioTrackList(audios);
  };

  return (
    <div className={styles["play-all-button"]}>
      <Button
        onClick={handleClick}
      >
        <img
          alt="icon"
          src={playButton}
          className={styles["play-icon"]}
        />
        <span className={styles["text"]}>Alle abspielen</span>
      </Button>
    </div>
  );
};

export default PlayAllButton;
