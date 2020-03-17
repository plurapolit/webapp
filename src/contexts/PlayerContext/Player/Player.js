import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

import Tracking from "../../../helper/TrackingHelper";
import { useStoreContext } from "../../StoreContext/StoreContext";
import styles from "./Player.module.scss";
import "react-h5-audio-player/src/styles.scss";
import { useTransition } from "../../../helper/CustomHookHelper";
import { Spinner } from "../../../components/Loader/Loader";

const Player = ({
  audioStatement = {
    author: "",
    panelTitle: "",
  },
  running = false,
  removeAudioTrackFromQueue,
  startPlayer,
}) => {
  const player = useRef();
  const tracker = useRef();
  const { user } = useStoreContext();
  const [startTransition, isPending] = useTransition();
  const { current } = useRef();
  let pauseIcon = current;

  const addTrackingToPlayer = async () => {
    const { statementId, isIntro } = audioStatement;
    tracker.current = await Tracking.create(statementId, user, isIntro);
  };

  if (audioStatement.statementId) addTrackingToPlayer();

  useEffect(() => {
    if (player.current && running) {
      startTransition(() => player.current.audio.play());
    } else if (player.current) {
      player.current.audio.pause();
    }
  }, [running, startTransition, audioStatement]);

  const onEnded = () => {
    if (tracker.current) tracker.current.updateTracking();
    removeAudioTrackFromQueue(audioStatement);
  };

  const onListen = () => {
    const { currentTime } = player.current.audio;
    if (tracker.current) tracker.current.trackWhilePlaying(currentTime);
  };

  const onPause = () => {
    if (tracker.current) tracker.current.updateTracking();
  };

  if (isPending) pauseIcon = <Spinner />;

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
          customIcons={{ pause: pauseIcon }}
        />
      </div>
    </div>
  );
};

export default Player;
