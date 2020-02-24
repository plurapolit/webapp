import React, {
  useState, useRef, useEffect, useContext,
} from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import withTracking from "../../helper/TrackingHelper";
import { StoreContext } from "../StoreContext/StoreContext";

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
  const { user } = useContext(StoreContext);

  const stopPlayer = () => {
    player.current.audio.pause();
  };

  const startPlayer = async () => {
    player.current.audio.play();
  };

  const onListen = () => {
    trackWhilePlaying(player);
  };

  const onStop = () => {
    updateTracking();
  };

  const setAudio = async (audioFile, newAuthor, id) => {
    setShowMediaPlayer(true);
    setAudioStatement(audioFile);
    setStatementId(id);
    setAuthor(newAuthor);
  };

  useEffect(() => {
    if (statementId) {
      createNewTrackingEntry(statementId, user);
    }
  }, [statementId]);

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
              onPlay={startPlayer}
              onPause={onStop}
              onEnded={onStop}
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

export { Player, PlayerContext };
