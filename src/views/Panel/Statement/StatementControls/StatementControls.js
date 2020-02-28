import React from "react";
import moment from "moment-with-locales-es6";

import { usePlayerContext } from "../../../../contexts/PlayerContext/PlayerContext";
import Button, { ButtonStyle } from "../../../../components/Button/Button";
import Time from "../../../../helper/TimeHelper";

import audioWave from "../../../../assets/images/sound-wave.svg";
import playButton from "../../../../assets/images/play.svg";
import styles from "./StatementControls.module.scss";

const StatementControls = ({ expert, panelTitle, toggleComments }) => {
  const { setAudio } = usePlayerContext();
  const { number_of_comments: commentNumber } = expert;

  const numberOfComments = () => {
    if (commentNumber === 0) {
      return "Kommentieren";
    }

    if (commentNumber === 1) {
      return "1 Kommentar";
    }

    return `${commentNumber} Kommentare`;
  };

  const audioDuration = () => moment
    .utc(
      moment
        .duration(expert.statement_audio_file.duration_seconds, "seconds")
        .asMilliseconds(),
    )
    .format("mm:ss");

  return (
    <div className={styles["controls"]}>
      <Button
        buttonStyle={ButtonStyle.COMMENT}
        onClick={() => toggleComments()}
      >
        {numberOfComments(expert)}
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
              {audioDuration(expert)}
            </div>
          </div>
        </div>
        <button
          type="button"
          className={styles["play"]}
          onClick={() => {
            setAudio(
              expert.statement_audio_file.file_link,
              expert.user.full_name,
              expert.statement.id,
              panelTitle,
            );
          }}
        >
          <img
            src={playButton}
            alt={expert.user.full_name}
            className={styles["play-img"]}
          />
        </button>
      </div>
    </div>
  );
};

export default StatementControls;
