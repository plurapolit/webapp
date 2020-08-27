import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

import CloseButton from "../../../components/CloseButton/CloseButton";
import Tracking from "../../../helper/TrackingHelper";
import { useUserContext } from "../../UserContext/UserContext";
import styles from "./Player.module.scss";
import "react-h5-audio-player/src/styles.scss";
import { useTransition } from "../../../helper/CustomHookHelper";
import Loader from "../../../components/Loader/Loader";
import ForwardIcon from "../../../assets/images/fast-forward.svg";
import RewindIcon from "../../../assets/images/rewind.svg";

const Player = ({
  audioStatement = {
    content: {
      author: "",
      panelTitle: "",
      transcription: "",
    },
    hasPrev: () => false,
    hasNext: () => false,
  },
  running = false,
  playNextAudioTrack,
  playPrevAudioTrack,
  setPaused,
  stopPlayer,
}) => {
  const player = useRef();
  const { user } = useUserContext();
  const [startTransition, isPending] = useTransition();
  let { current: pauseIcon } = useRef();
  const tracker = useRef();

  useEffect(() => {
    if (audioStatement.content.statementId) {
      (async () => {
        const { statementId, isIntro } = audioStatement.content;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        tracker.current = await Tracking.create(statementId, user, isIntro);
      })();
    }
  }, [audioStatement, user]);

  useEffect(() => {
    if (player.current && running) {
      startTransition(() => player.current.audio.play());
    } else if (player.current) {
      player.current.audio.pause();
    }
  }, [running, startTransition]);

  const onEnded = () => {
    if (tracker.current) tracker.current.updateTracking();
    if (audioStatement.hasNext()) playNextAudioTrack();
  };

  const onListen = () => {
    const { currentTime } = player.current.audio;
    if (tracker.current) tracker.current.trackWhilePlaying(currentTime);
  };

  const onPause = () => {
    if (tracker.current) {
      tracker.current.updateTracking();
    }
    setPaused(true);
  };

  const startTrackFromBeginning = () => {
    if (player.current) player.current.audio.currentTime = 0;
  };

  const onPrevious = () => {
    if (tracker.current) tracker.current.updateTracking();
    const { currentTime } = player.current.audio;
    if (currentTime < 2 && audioStatement.hasPrev() && !audioStatement.isFirstInQueue()) {
      playPrevAudioTrack();
    } else {
      startTrackFromBeginning();
    }
  };

  if (isPending) pauseIcon = <Loader size={35} borderWidth="0.3rem" />;

  const customIcons = {
    forward: <img alt="forward" src={ForwardIcon} className={styles["media-player-time-change-button"]} />,
    rewind: <img alt="rewind" src={RewindIcon} className={styles["media-player-time-change-button"]} />,
    pause: pauseIcon,
  };

  return (
    <div className={styles["media-player-wrapper"]}>
      <CloseButton onClick={stopPlayer} />
      <p className={styles["media-player-wrapper-user"]}>{audioStatement.content.author}</p>
      <p className={styles["media-player-wrapper-statement"]}>{audioStatement.content.panelTitle}</p>
      <div className={styles["media-player-wrapper-player"]} data-test="player">
        <AudioPlayer
          src={audioStatement.content.audioFile}
          ref={player}
          onPlay={() => setPaused(false)}
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
          showSkipControls
        >
          {audioStatement.content.transcription
            ? audioStatement.content.transcription.content
            : "Ihr Browser unterstütz leider kein Audio, bitte versuchen sie es mit einem anderen."}
        </AudioPlayer>
      </div>
    </div>
  );
};

export default Player;
