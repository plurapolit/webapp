import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import ReactAudioPlayer from 'react-audio-player';
import styles from './PanelContent.module.scss';
import audioWave from '../../media/images/sound-wave.svg';
import playButton from '../../media/images/play.svg';
import PanelComments from '../PanelComments/PanelComments';

const IMAGEROOTURL = process.env.REACT_APP_BUCKETNAME;

const PanelContent = ({ content }) => {
  const refContent = useRef(undefined);
  const [audioStatement, setAudioStatement] = useState('');
  const [songIndex, setSongIndex] = useState(1);
  const [showComments, setShowComments] = useState(false);
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);

  useEffect(() => {
    const color = content.panel.font_color;
    refContent.current.style.setProperty('--color', color);

    const song = content.expert_statements.find((file) => file.index === songIndex);
    setAudioStatement(song.statement_audio_file.file_link);
  }, []);

  const getNextSong = async () => {
    const newIndex = await songIndex + 1;
    await setSongIndex(newIndex);
    if (songIndex <= content.expert_statements.length) {
      const nextSong = content.expert_statements.find((song) => song.index === songIndex);
      setAudioStatement(nextSong.statement_audio_file.file_link);
    }
  };

  const getCurrentSong = async (index) => {
    setShowMediaPlayer(true);
    await setSongIndex(index);
    const song = await content.expert_statements.find((file) => file.index === songIndex);
    setAudioStatement(song.statement_audio_file.file_link);
  };

  const showUserComments = () => {
    setShowComments(!showComments);
  }

  return (
    <div>
      <div ref={refContent} className={styles.headline}>
        {content.panel.title}
      </div>
      <div className={styles.description}>{content.panel.short_title}</div>
      <div className={styles.wrapper}>
        <div className={styles["experts-headline"]}>Experten</div>
        {content.expert_statements.map(expert => (
          <div key={expert.statement.id} className={styles["expert-wrapper"]}>
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
                </div>
              </div>
              <div className={styles["expert-card-statement"]}>
                &ldquo;
                {expert.statement.quote}
                &rdquo;
              </div>
              <div className={styles["expert-card-controls"]}>
                <div
                  className={styles["expert-card-comments"]}
                  onClick={showUserComments}
                >
                  {expert.number_of_comments}{" "}
                  {expert.number_of_comments === 1 ? "Antwort" : "Antworten"}
                </div>
                <div className={styles["expert-card-nav"]}>
                  <img
                    src={audioWave}
                    alt={expert.user.full_name}
                    className={styles["expert-card-nav-img"]}
                  />
                  <div className={styles["expert-card-nav-time"]}>
                    {moment
                      .utc(
                        moment
                          .duration(
                            expert.statement_audio_file.duration_seconds,
                            "seconds"
                          )
                          .asMilliseconds()
                      )
                      .format("mm:ss")}
                  </div>
                  <button
                    className={styles["expert-card-nav-play"]}
                    onClick={() => getCurrentSong(expert.index)}
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
            {showComments && <PanelComments showUserComments={showUserComments} />}
          </div>
        ))}
        <div className={styles["experts-headline"]}>Community</div>
        {content.community_statements.map(expert => (
          <div key={expert.statement.id} className={styles["expert-card"]}>
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
                {/* <div className={styles["expert-card-organisation"]}>
                  {expert.organisation.name}
                </div> */}
              </div>
            </div>
            <div className={styles["expert-card-statement"]}>
              &ldquo;
              {expert.statement.quote}
              &rdquo;
            </div>
            <div className={styles["expert-card-controls"]}>
              <div
                className={styles["expert-card-comments"]}
                onClick={showUserComments}
              >
                {expert.number_of_comments}{" "}
                {expert.number_of_comments === 1 ? "Antwort" : "Antworten"}
              </div>
              <div className={styles["expert-card-nav"]}>
                <img
                  src={audioWave}
                  alt={expert.user.full_name}
                  className={styles["expert-card-nav-img"]}
                />
                <div className={styles["expert-card-nav-time"]}>
                  {moment
                    .utc(
                      moment
                        .duration(
                          expert.statement_audio_file.duration_seconds,
                          "seconds"
                        )
                        .asMilliseconds()
                    )
                    .format("mm:ss")}
                </div>
                <button className={styles["expert-card-nav-play"]}>
                  <img
                    src={playButton}
                    alt={expert.user.full_name}
                    className={styles["expert-card-nav-play-img"]}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
        {showMediaPlayer && <div className={styles["media-player-wrapper"]}>
          <ReactAudioPlayer
            src={audioStatement}
            onEnded={getNextSong}
            // autoPlay
            controls
          />
        </div>}
      </div>
    </div>
  );
};

export default PanelContent;
