import React from "react";

import { usePlayerContext } from "../../../../contexts/PlayerContext/PlayerContext";
import Button, { ButtonStyle } from "../../../../components/Button/Button";
import Time from "../../../../helper/TimeHelper";
import { usePanelContext } from "../../../../contexts/PanelStoreContext/PanelStoreContext";
import { createAudioTrackListFromExpertStatements } from "../../../../helper/AudioTrackHelper";
import Highlight from "../../../../components/Highlight/Highlight";

import audioWave from "../../../../assets/images/sound-wave.svg";
import styles from "./StatementControls.module.scss";
import Helper from "./StatementControlsHelper";

const StatementControls = ({ expert, toggleComments }) => {
  const {
    queue,
    startPlayer,
    paused,
    currentStatement,
  } = usePlayerContext();
  const { shortTitle, expertStatements } = usePanelContext();

  const thisStatementIsPlaying = () => {
    if (currentStatement) return currentStatement.content.statementId === expert.statement.id;
    return false;
  };

  const handleClick = () => {
    const audioTrack = {
      audioFile: expert.statement_audio_file.file_link,
      author: expert.user.full_name,
      statementId: expert.statement.id,
      intro: expert.intro.audio_file_link,
      transcription: expert.transcription,
      panelTitle: shortTitle,
    };
    if (!queue.hasAudioTrack(audioTrack)) {
      const playlist = createAudioTrackListFromExpertStatements(expertStatements, shortTitle);
      queue.setAudioTrackList(playlist);
    }
    queue.setStartAudioTrack(audioTrack, { notIntro: true });
    startPlayer();
  };

  return (
    <div className={styles["controls"]}>
      <Highlight renderCondition={4}>
        <Button
          buttonStyle={ButtonStyle.COMMENT}
          onClick={() => toggleComments()}
        >
          {Helper.getStringForNComments()}
        </Button>
      </Highlight>
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
          onClick={() => handleClick()}
        >
          <img
            src={Helper.playButtonImage(thisStatementIsPlaying(), paused)}
            alt={expert.user.full_name}
            className={styles["play-img"]}
          />
        </button>
      </div>
    </div>
  );
};

export default StatementControls;
