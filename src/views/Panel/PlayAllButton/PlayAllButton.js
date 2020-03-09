import React from "react";

import { usePlayerContext } from "../../../contexts/PlayerContext/PlayerContext";
import Button from "../../../components/Button/Button";
import styles from "./PlayAllButton.module.scss";

const PlayAllButton = ({
  expertStatements,
  panelTitle,
}) => {
  const { setAudios } = usePlayerContext();
  const audios = expertStatements.map((statement) => ({
    audioFile: statement.statement_audio_file.file_link,
    author: statement.user.full_name,
    statementId: statement.statement.id,
    panelTitle,
  }));

  const handleClick = () => {
    setAudios(audios);
  };

  return (
    <div className={styles["play-all-button"]}>
      <Button
        onClick={handleClick}
      >
        Alle abspielen
      </Button>
    </div>
  );
};

export default PlayAllButton;
