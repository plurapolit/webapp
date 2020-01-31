/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import styles from './PanelContent.module.scss';
import audioWave from '../../media/images/sound-wave.svg';
import playButton from '../../media/images/play.svg';
import PanelComments from '../PanelComments/PanelComments';
import Player from '../Player/Player';

const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

const PanelContent = ({ content }) => {
  const refContent = useRef(undefined);
  const [audioStatement, setAudioStatement] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [expertsId, setExpertsId] = useState(null);
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);
  const [isAutoplayed, setIsAutoplayed] = useState(false);
  const [userComments, setUserComments] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const color = content.panel.font_color;
    refContent.current.style.setProperty('--color', color);
  });

  const panelTitle = content.panel.short_title;

  const setSong = async (audioFile, user) => {
    setShowMediaPlayer(true);
    setIsAutoplayed(true);
    setAudioStatement(audioFile);
    setCurrentUser(user);
  };

  const showUserComments = async (userId) => {
    await fetch(`${process.env.REACT_APP_ROOT_URL}/statements/${userId}/comments/`)
      .then((res) => res.json())
      .then((json) => setUserComments(json));
    setExpertsId(userId);
    setShowComments(!showComments);
  };

  const closeComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <div className={styles["row"]}>
        <div ref={refContent} className={styles.headline}>
          {content.panel.title}
        </div>
        <div className={styles.description}>{content.panel.short_title}</div>
        <div className={styles.wrapper}>
          <div className={styles["experts-headline"]}>Experten</div>
          {content.expert_statements.map((expert) => (
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
                    onClick={() => showUserComments(expert.statement.id)}
                  >
                    {expert.number_of_comments}
                    {expert.number_of_comments === 1 ? ' Antwort' : ' Antworten'}
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
                              'seconds',
                            )
                            .asMilliseconds(),
                        )
                        .format('mm:ss')}
                    </div>
                    <button
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
              {showComments && expert.statement.id === expertsId && (
                <PanelComments
                  closeComments={closeComments}
                  comments={userComments}
                  setSong={setSong}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {showMediaPlayer && (
        <Player
          audioStatement={audioStatement}
          isAutoplayed={isAutoplayed}
          currentUser={currentUser}
          panelTitle={panelTitle}
        />
      )}
    </div>
  );
};

export default PanelContent;
