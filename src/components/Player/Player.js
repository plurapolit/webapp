import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import styles from './Player.module.scss';

const Player = ({
  audioStatement, isAutoplayed, currentUser, panelTitle,
}) => (
  <div className={styles["media-player-wrapper"]}>
    <p className={styles["media-player-wrapper-user"]}>{currentUser}</p>
    <p className={styles["media-player-wrapper-statement"]}>{panelTitle}</p>
    <div className={styles["media-player-wrapper-player"]}>
      <AudioPlayer
        src={audioStatement}
        autoPlay={isAutoplayed}
        showVolumeControl={false}
        showLoopControl={false}
        progressJumpStep={10000}
      />
    </div>
  </div>
);

export default Player;
