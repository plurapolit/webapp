import React from "react";

import { usePlayerContext } from "../../../../contexts/PlayerContext/PlayerContext";
import Time from "../../../../helper/TimeHelper";

import audioWave from "../../../../assets/images/sound-wave.svg";
import playButton from "../../../../assets/images/play.svg";

import styles from "./CommentAudio.module.scss";

const Audio = ({ commentData, panelTitle }) => {
  const { queue, startPlayer } = usePlayerContext();
  const handleClick = () => {
    const audioTrack = {
      audioFile: commentData.audio_file.file_link,
      author: commentData.user.full_name,
      statementId: commentData.comment.id,
      panelTitle,
    };
    if (!queue.hasAudioTrack(audioTrack)) queue.setAudioTrackList([audioTrack]);
    queue.setStartAudioTrack(audioTrack);
    startPlayer();
  };

  return (
    <div className={styles["audio"]}>
      <div
        className={[styles["audio-icon"], commentData.user.role === "expert" && styles["audio-icon--expert"]].join(" ")}
        onClick={() => handleClick()}
        data-test="play-button"
      >
        <img
          alt="icon"
          src={playButton}
          className={styles["audio-icon_img"]}
        />
      </div>
      <div className={styles["audio-info"]}>
        <div className={styles["audio-info_duration"]}>
          <img
            alt="icon"
            src={audioWave}
            className={styles["audio-info_duration_img"]}
          />
          {Time.getDurationInSeconds(commentData.audio_file.duration_seconds)}
        </div>
        <div className={styles["audio-info_date"]}>
          {Time.getDateOrTime(commentData.comment.created_at)}
        </div>
      </div>
    </div>
  );
};

export default Audio;
