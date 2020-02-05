import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import styles from './Player.module.scss';
import PiwikMessages from '../../helper/PiwikMessages';

const Player = ({
  audioStatement, currentUser, panelTitle, isStopped, startPlayer,
}) => {
  const player = useRef(null);

  const stopAudio = () => {
    player.current.audio.pause();
  };

  const startAudio = () => {
    player.current.audio.play();
  };

  const setAudioTitleForMatomo = () => {
    player.current.audio.setAttribute('data-matomo-title', `${panelTitle} | ${currentUser} (${audioStatement})`);
  };

  useEffect(() => {
    if (isStopped) {
      stopAudio();
    }
  }, [isStopped]);

  useEffect(() => {
    setAudioTitleForMatomo();
  }, []);

  useEffect(() => {
    if (audioStatement) {
      startAudio();
    }
  }, [audioStatement]);

  return (
    <div className={styles["media-player-wrapper"]}>
      <p className={styles["media-player-wrapper-user"]}>{currentUser}</p>
      <p className={styles["media-player-wrapper-statement"]}>{panelTitle}</p>
      <div className={styles["media-player-wrapper-player"]}>
        <AudioPlayer
          src={audioStatement}
          showVolumeControl={false}
          showLoopControl={false}
          progressJumpStep={10000}
          ref={player}
          onPlay={() => startPlayer()}
        />
      </div>
    </div>
  );
};

export default Player;
