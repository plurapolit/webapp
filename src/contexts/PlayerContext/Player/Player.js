import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

import Tracking from "../../../helper/TrackingHelper";
import { useStoreContext } from "../../StoreContext/StoreContext";
import styles from "./Player.module.scss";
import "react-h5-audio-player/src/styles.scss";
import ForwardIcon from "../../../assets/images/fast-forward.svg";
import RewindIcon from "../../../assets/images/rewind.svg";

const Player = ({
  audioStatement = {
    author: "",
    panelTitle: "",
  },
  running = false,
  removeAudioTrackFromQueue,
  startPlayer,
  multipleSongsInQueue,
}) => {
  const player = useRef();
  const tracker = useRef();
  const { user } = useStoreContext();

  const addTrackingToPlayer = async () => {
    tracker.current = await Tracking.create(audioStatement.statementId, user);
  };

  if (audioStatement.statementId) addTrackingToPlayer();

  useEffect(() => {
    if (player.current && running) {
      player.current.audio.play();
    } else if (player.current) {
      player.current.audio.pause();
    }
  }, [running]);

  const updateTracking = () => {
    if (tracker.current) tracker.current.updateTracking();
  };

  const onEnded = () => {
    updateTracking();
    removeAudioTrackFromQueue(audioStatement);
  };

  const onListen = () => {
    const { currentTime } = player.current.audio;
    if (tracker.current) tracker.current.trackWhilePlaying(currentTime);
  };

  const onPause = () => {
    updateTracking();
  };

  const startTrackFromBeginning = () => {
    if (player.current) player.current.audio.currentTime = 0;
  };

  const onPrevious = () => {
    updateTracking();
    const { currentTime } = player.current.audio;
    if (currentTime < 2) {
      console.log("track before");
    } else {
      startTrackFromBeginning();
    }
  };

  const customIcons = {
    forward: <img alt="forward" src={ForwardIcon} />,
    rewind: <img alt="rewind" src={RewindIcon} />,
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
          onClickNext={onEnded}
          onClickPrevious={onPrevious}
          onListen={onListen}
          customIcons={customIcons}
          listenInterval={1000}
          progressJumpStep={10000}
          showVolumeControl={false}
          showLoopControl={false}
          showSkipControls={multipleSongsInQueue}
        />
      </div>
    </div>
  );
};

export default Player;
