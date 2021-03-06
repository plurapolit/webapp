import React from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";
import styles from "./PlayAllButton.module.scss";
import playButton from "../../../assets/images/play.svg";
import { createAudioTrackListFromExpertStatements } from "../../../helper/AudioTrackHelper";
import { usePanelContext } from "../../../contexts/PanelStoreContext/PanelStoreContext";

const PlayAllButton = () => {
  const { queue, startPlayer } = usePlayerContext();
  const { shortTitle, expertStatements } = usePanelContext();

  const handleClick = () => {
    const audios = createAudioTrackListFromExpertStatements(expertStatements, shortTitle);
    if (!queue.hasAudioTrack(audios[0])) queue.setAudioTrackList(audios);
    queue.setStartAudioTrack(audios[0]);
    startPlayer();
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
