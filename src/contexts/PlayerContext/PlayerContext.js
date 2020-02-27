import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import AudioPlayer from "react-h5-audio-player";
import withTracking from "../../helper/TrackingHelper";
import { useStoreContext } from "../StoreContext/StoreContext";

import "react-h5-audio-player/src/styles.scss";
import styles from "./Player.module.scss";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const Player = withTracking(({
  children,
  show = false,
  trackWhilePlaying,
  updateTracking,
  createNewTrackingEntry,
}) => {
  const player = useRef();
  const [audioStatement, setAudioStatement] = useState("");
  const [author, setAuthor] = useState("");
  const [panelTitle, setPanelTitle] = useState();
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [statementId, setStatementId] = useState(null);
  const { user } = useStoreContext();
  const [running, setRunning] = useState(false);

  const stopPlayer = () => {
    setRunning(false);
  };

  const startPlayer = () => {
    setRunning(true);
  };

  const onListen = () => {
    trackWhilePlaying(player);
  };

  const setAudio = async (audioFile, newAuthor, id) => {
    setShowMediaPlayer(true);
    setAudioStatement(audioFile);
    setStatementId(id);
    setAuthor(newAuthor);
    startPlayer();
  };

  useEffect(() => {
    if (statementId) {
      createNewTrackingEntry(statementId, user);
    }
  }, [statementId, user, createNewTrackingEntry]);

  const stop = () => {
    player.current.audio.pause();
  };

  const start = () => {
    player.current.audio.play();
  };

  useEffect(() => {
    if (player.current) {
      if (running) {
        start();
      }
      if (!running) {
        stop();
      }
    }
  }, [running]);

  return (
    <Provider value={{
      stopPlayer,
      setAudio,
      setPanelTitle,
    }}
    >
      {children}
      {showMediaPlayer && (
        <div className={styles["media-player-wrapper"]}>
          <p className={styles["media-player-wrapper-user"]}>{author}</p>
          <p className={styles["media-player-wrapper-statement"]}>{panelTitle}</p>
          <div className={styles["media-player-wrapper-player"]}>
            <AudioPlayer
              src={audioStatement}
              ref={player}
              onPlay={start}
              onPause={updateTracking}
              onEnded={updateTracking}
              onListen={onListen}
              listenInterval={1000}
              progressJumpStep={10000}
              showVolumeControl={false}
              showLoopControl={false}
            />
          </div>
        </div>
      )}
    </Provider>
  );
});

const usePlayerContext = () => useContext(PlayerContext);

export { Player, Provider as PlayerProvider, usePlayerContext };
