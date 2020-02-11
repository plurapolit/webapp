import React, { useState } from "react";
import moment from "moment";

import audioWave from "../../media/images/sound-wave.svg";
import playButton from "../../media/images/play.svg";
import PanelComments from "../PanelComments/PanelComments";
import styles from "./Statement.module.scss";

const Statement = ({
  expert,
  setShowMediaPlayer,
  setIsAutoplayed,
  setAudioStatement,
  setCurrentUser,
  stopPlayer,
  startPlayer,
}) => {
  const [commentsAreOpen, setCommentsAreOpen] = useState(false);

  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

  const setSong = async (audioFile, user) => {
    setShowMediaPlayer(true);
    setIsAutoplayed(true);
    setAudioStatement(audioFile);
    setCurrentUser(user);
    startPlayer();
  };

  const numberOfComments = () => `${expert.number_of_comments} ${
    expert.number_of_comments === 1 ? " Antwort" : " Antworten"
  }`;

  const audioDuration = () => moment
    .utc(
      moment
        .duration(expert.statement_audio_file.duration_seconds, "seconds")
        .asMilliseconds(),
    )
    .format("mm:ss");

  const toggleComments = () => {
    setCommentsAreOpen(!commentsAreOpen);
  };

  return (
    <div className={styles["expert-wrapper"]}>
      <div className={styles["expert-card"]}>
        <div className={styles["expert-card-header"]}>
          <img
            src={`${IMAGEROOTURL}/${expert.user_avatar_key}`}
            alt={expert.user.full_name}
            className={styles["expert-card-image"]}
          />
          <div className={styles["expert-card-user"]}>
            <div className={styles["expert-card-name"]}>
              {expert.user.full_name}
            </div>
            <div className={styles["expert-card-organisation"]}>
              {expert.organisation.name}
            </div>
            <div className={styles["expert-card-organisation"]}>
              {expert.user.biography}
            </div>
          </div>
        </div>
        <div className={styles["expert-card-statement"]}>
          <div className={styles["expert-card-quote-text"]}>
            {`"${expert.statement.quote}"`}
          </div>
        </div>
        <div className={styles["expert-card-controls"]}>
          <div
            className={styles["expert-card-comments"]}
            onClick={() => toggleComments()}
          >
            {numberOfComments(expert)}
          </div>
          <div className={styles["expert-card-nav"]}>
            <img
              src={audioWave}
              alt={expert.user.full_name}
              className={styles["expert-card-nav-img"]}
            />
            <div className={styles["expert-card-nav-time"]}>
              {audioDuration(expert)}
            </div>
            <button
              type="button"
              className={styles["expert-card-nav-play"]}
              onClick={() => {
                setSong(
                  expert.statement_audio_file.file_link,
                  expert.user.full_name,
                );
              }}
            >
              <img
                src={playButton}
                alt={expert.user.full_name}
                className={styles["expert-card-nav-play-img"]}
              />
            </button>
          </div>
        </div>
      </div>
      {commentsAreOpen && (
        <PanelComments
          toggleComments={toggleComments}
          setSong={setSong}
          statementId={expert.statement.id}
          stopPlayer={stopPlayer}
        />
      )}
    </div>
  );
};

export default Statement;
