import React, { useState, useEffect, useContext } from "react";
import moment from "moment-with-locales-es6";

import styles from "./Statement.module.scss";

import { PlayerContext } from "../../layouts/Player/PlayerContext";
import Button, { ButtonStyle } from "../Button/Button";
import audioWave from "../../media/images/sound-wave.svg";
import playButton from "../../media/images/play.svg";
import PanelComments from "../PanelComments/PanelComments";
import TwitterButton from "../TwitterButton/TwitterButton";
import Time from "../../helper/TimeHelper";

const Statement = ({
  expert,
}) => {
  const [commentsAreOpen, setCommentsAreOpen] = useState(false);
  const { setSong } = useContext(PlayerContext);

  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

  const avatar = () => {
    const image = (
      <img
        src={`${IMAGEROOTURL}/${expert.user_avatar_key}`}
        alt={expert.user.full_name}
        className={styles["expert-card-image"]}
      />
    );

    if (expert.user.website_link) {
      return (
        <a href={expert.user.website_link} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      );
    }
    return image;
  };

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

  useEffect(() => {
    const openCommentsIfCommentsAreAvailable = () => {
      if (commentNumber > 0) {
        setCommentsAreOpen(true);
      }
    };
    openCommentsIfCommentsAreAvailable();
  }, [commentNumber]);

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
          <div className={styles["expert-card-header-left"]}>
            {avatar()}
            <div className={styles["expert-card-user"]}>
              <div className={styles["expert-card-name-wrapper"]}>
                <div className={styles["expert-card-name"]}>
                  {expert.user.full_name}
                </div>
              </div>
              <div className={styles["expert-card-organisation"]}>
                {expert.organisation.name}
              </div>
              <div className={styles["expert-card-organisation"]}>
                {expert.user.biography}
              </div>
            </div>
          </div>
          <TwitterButton handle={expert.user.twitter_handle} />
        </div>
        <div className={styles["expert-card-statement"]}>
          <div className={styles["expert-card-quote-text"]}>
            {`"${expert.statement.quote}"`}
          </div>
        </div>
        <div className={styles["expert-card-controls"]}>
          <Button
            buttonStyle={ButtonStyle.COMMENT}
            onClick={() => toggleComments()}
          >
            {numberOfComments(expert)}
          </Button>
          <div className={styles["expert-card-nav"]}>
            <div className={styles["expert-card-nav_info-container"]}>
              <span>{Time.getDateOrTime(expert.statement.created_at)}</span>
              <div className={styles["expert-card-nav-time-wrapper"]}>
                <img
                  src={audioWave}
                  alt={expert.user.full_name}
                  className={styles["expert-card-nav-img"]}
                />
                <div className={styles["expert-card-nav-time"]}>
                  {audioDuration(expert)}
                </div>
              </div>
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
          statementId={expert.statement.id}
          expertFullName={expert.user.full_name}
          statementDate={expert.statement.created_at}
        />
      )}
    </div>
  );
};

export default Statement;
