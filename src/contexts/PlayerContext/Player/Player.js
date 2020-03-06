import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

// import withTracking from "../../../helper/TrackingHelper";
// import { useStoreContext } from "../StoreContext/StoreContext";
import styles from "./Player.module.scss";
import "react-h5-audio-player/src/styles.scss";

const Player = ({
  // updateTracking,
  // trackWhilePlaying,
  // createNewTrackingEntry,
  audioStatement = {
    author: "",
    panelTitle: "",
  },
  running = false,
  removeAudioFromQueue,
  startPlayer,
}) => {
  const player = useRef();
  // const { user } = useStoreContext();

  if (audioStatement.statementId) {
    // createNewTrackingEntry(audioStatement.statementId, user);
  }

  useEffect(() => {
    if (player.current) {
      if (running) {
        player.current.audio.play();
      } else {
        player.current.audio.pause();
      }
    }
  }, [running]);

  const onEnded = () => {
    // updateTracking();
    removeAudioFromQueue(audioStatement);
  };

  return (
    <div className={styles["media-player-wrapper"]}>
      <p className={styles["media-player-wrapper-user"]}>{audioStatement.author}</p>
      <p className={styles["media-player-wrapper-statement"]}>{audioStatement.panelTitle}</p>
      <div className={styles["media-player-wrapper-player"]}>
        <AudioPlayer
          src={audioStatement.audioFile}
          ref={player}
          onPlay={startPlayer}
          // onPause={updateTracking}
          onEnded={onEnded}
          // onListen={() => trackWhilePlaying(player.current)}
          listenInterval={1000}
          progressJumpStep={10000}
          showVolumeControl={false}
          showLoopControl={false}
        />
      </div>
    </div>
  );
};

// export default withTracking(Player);
export default Player;
