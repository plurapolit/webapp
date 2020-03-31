import React from "react";

import { usePlayerContext } from "../../../../contexts/PlayerContext/PlayerContext";
import Button, { ButtonStyle } from "../../../../components/Button/Button";
import Time from "../../../../helper/TimeHelper";

import audioWave from "../../../../assets/images/sound-wave.svg";
import styles from "./StatementControls.module.scss";
import Helper from "./StatementControlsHelper";

const StatementControls = ({
  expert, panelTitle, toggleComments,
}) => {
  const { setAudioTrack, currentStatement, paused } = usePlayerContext();
  const {
    number_of_comments: numberOfComments,
    statement,
  } = expert;
  const thisStatementIsSelected = currentStatement && currentStatement.statementId === statement.id;

  return (
    <div className={styles["controls"]}>
      <Button
        buttonStyle={ButtonStyle.COMMENT}
        onClick={() => toggleComments()}
      >
        {Helper.getStringForNComments(numberOfComments)}
      </Button>
      <div className={styles["audio"]}>
        <div className={styles["info-container"]}>
          <span>{Time.getDateOrTime(expert.statement.created_at)}</span>
          <div className={styles["duration-wrapper"]}>
            <img
              src={audioWave}
              alt={expert.user.full_name}
              className={styles["audio-img"]}
            />
            <div className={styles["duration"]}>
              {Time.getDurationInSeconds(expert.statement_audio_file.duration_seconds)}
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles["play"]}
          data-test="play-button"
          onClick={() => {
            setAudioTrack({
              audioFile: expert.statement_audio_file.file_link,
              author: expert.user.full_name,
              statementId: expert.statement.id,
              panelTitle,
            });
          }}
        >
          <img
            src={Helper.playButtonImage(thisStatementIsSelected, paused)}
            alt={expert.user.full_name}
            className={styles["play-img"]}
          />
        </button>
      </div>
    </div>
  );
};

export default StatementControls;
