import React, {
  useState, useRef, useEffect, useContext,
} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import UserAudioTrackingApi from "../../api/UserAudioTrackingApi";
import { StoreContext } from "../StoreContext/StoreContext";
// import PiwikMessages from "../../helper/PiwikMessagesHelper";

import styles from "./Player.module.scss";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const Player = ({
  children,
  show = false,
}) => {
  const { user } = useContext(StoreContext);
  const player = useRef();
  const [audioStatement, setAudioStatement] = useState("");
  const [author, setAuthor] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [listenEvent, setListenEvent] = useState(-1);
  const [panelTitle, setPanelTitle] = useState();
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [statementId, setStatementId] = useState(null);
  const [trackingId, setTrackingId] = useState();

  const userId = user ? user.id : null;

  const stopPlayer = () => {
    player.current.audio.pause();
    // PiwikMessages.statement.stop(panelTitle, author, audioStatement);
  };

  const startPlayer = async () => {
    player.current.audio.play();
    // PiwikMessages.statement.start(panelTitle, author, audioStatement);
  };

  const setAudio = async (audioFile, newAuthor, id) => {
    setShowMediaPlayer(true);
    setAudioStatement(audioFile);
    setStatementId(id);
    setAuthor(newAuthor);
  };

  const updateTracking = async () => {
    await UserAudioTrackingApi.put(trackingId, currentTime, listenEvent);
    return true;
  };

  useEffect(() => {
    if (statementId) {
      const createNewTrackingEntry = async () => {
        const res = await UserAudioTrackingApi.post(userId, statementId, 0, 0);
        setTrackingId(res.id);
      };
      createNewTrackingEntry();
    }
  }, [statementId]);

  const resetTracking = () => {
    setListenEvent(-1);
    setTrackingId(null);
    setCurrentTime(0);
  };

  const onListen = () => {
    setCurrentTime(player.current.audio.currentTime);
    setListenEvent(listenEvent + 1);
    if (listenEvent % 10 === 0 && listenEvent > 5) {
      updateTracking();
    }
  };

  const onStopListening = async () => {
    await updateTracking();
    resetTracking();
  };

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
              onPause={updateTracking}
              onListen={onListen}
              onAbort={onStopListening}
              onEnded={onStopListening}
              showVolumeControl={false}
              showLoopControl={false}
              progressJumpStep={10000}
              listenInterval={1000}
            />
          </div>
        </div>
      )}
    </Provider>
  );
};

export { Player, PlayerContext };
