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
  const { queue, startPlayer } = usePlayerContext();

  const handleClick = () => {
    const audios = createAudioTrackListFromExpertStatements(expertStatements, panelTitle);
    if (!queue.hasAudioTrack(audios[0])) queue.setAudioTrackList(audios);
    queue.setCurrentAudioTrack({ track: audios[0], isStart: true });
    startPlayer();
  };

  return (
    <div className={styles["play-all-button"]}>
      <Button
        onClick={handleClick}
      >
        <div className={styles["button-content"]}>
          <img
            alt="icon"
            src={playButton}
            className={styles["play-icon"]}
          />
          Alle abspielen
        </div>
      </Button>
    </div>
  );
};

export default PlayAllButton;
