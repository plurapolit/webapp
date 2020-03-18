import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

import Tracking from "../../../helper/TrackingHelper";
import { useStoreContext } from "../../StoreContext/StoreContext";
import styles from "./Player.module.scss";
import "react-h5-audio-player/src/styles.scss";

const Player = ({
  audioStatement = {
    author: "",
    panelTitle: "",
  },
  running = false,
  playNextAudioTrack,
  // playPrevAudioTrack,
  startPlayer,
  setPaused,
}) => {
  const player = useRef();
  const { user } = useStoreContext();
  const { current } = useRef();
  let tracker = current;

  useEffect(() => {
    if (audioStatement.statementId) {
      (async () => {
        const { statementId, isIntro } = audioStatement;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        tracker = await Tracking.create(statementId, user, isIntro);
      })();
    }
  }, [audioStatement, user]);

  useEffect(() => {
    if (player.current && running) {
      player.current.audio.play();
    } else if (player.current) {
      player.current.audio.pause();
    }
  }, [running]);

  const onEnded = () => {
    if (tracker) tracker.updateTracking();
    playNextAudioTrack(audioStatement);
  };

  const onListen = () => {
    const { currentTime } = player.current.audio;
    if (tracker) tracker.trackWhilePlaying(currentTime);
  };

  const onPause = () => {
    if (tracker) tracker.updateTracking();
    setPaused(true);
  };

  return (
    <div className={styles["media-player-wrapper"]}>
      <p className={styles["media-player-wrapper-user"]}>{audioStatement.author}</p>
      <p className={styles["media-player-wrapper-statement"]}>{audioStatement.panelTitle}</p>
      <div className={styles["media-player-wrapper-player"]} data-test="player">
        <AudioPlayer
          src={audioStatement.audioFile}
          ref={player}
          onPlay={startPlayer}
          onPause={onPause}
          onEnded={onEnded}
          onListen={onListen}
          listenInterval={1000}
          progressJumpStep={10000}
          showVolumeControl={false}
          showLoopControl={false}
        />
      </div>
    </div>
  );
};

export default Player;
