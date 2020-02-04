import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import styles from './Player.module.scss';

const Player = ({
  audioStatement, isAutoplayed, currentUser, panelTitle, isStopped, startPlayer,
}) => {
  const player = useRef(null);

  const stopAudio = () => {
    player.current.audio.pause();
  };

  const setAudioTitleForMatomo = () => {
    player.current.audio.setAttribute('data-matomo-title', `${panelTitle} | ${currentUser} (${audioStatement})`);
  };

  useEffect(() => {
    if (isStopped) {
      stopAudio();
    }
    setAudioTitleForMatomo();
  }, [isStopped]);

  return (
    <div className={styles["media-player-wrapper"]}>
      <p className={styles["media-player-wrapper-user"]}>{currentUser}</p>
      <p className={styles["media-player-wrapper-statement"]}>{panelTitle}</p>
      <div className={styles["media-player-wrapper-player"]}>
        <AudioPlayer
          src={audioStatement}
          // autoPlay={isAutoplayed}
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
