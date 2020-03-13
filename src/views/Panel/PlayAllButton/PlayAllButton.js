import React from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";
import styles from "./PlayAllButton.module.scss";
import playButton from "../../../assets/images/play.svg";

const PlayAllButton = ({
  expertStatements,
  panelTitle,
}) => {
  const { setAudioTrackList } = usePlayerContext();
  const audios = [];
  expertStatements.forEach((statement) => {
    const { intro } = statement;
    if (intro) {
      const introStatement = {
        audioFile: intro.audio_file_link,
        author: statement.user.full_name,
        statementId: statement.statement.id,
        panelTitle,
        isIntro: true,
      };
      audios.push(introStatement);
    }
    const audioStatement = {
      audioFile: statement.statement_audio_file.file_link,
      author: statement.user.full_name,
      statementId: statement.statement.id,
      panelTitle,
    };
    audios.push(audioStatement);
  });

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
