import React, {
  useState,
  useContext,
  useEffect,
} from "react";
import { If } from "react-if";

import Player from "./Player/Player";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const PlayerWrapper = ({
  children,
  show = false,
}) => {
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [queue, setQueue] = useState([]);
  const [currentStatement, setCurrentStatement] = useState();
  const [paused, setPaused] = useState(false);

  const removeAudioTrackFromQueue = (statement) => {
    const newQueue = queue.filter((element) => element !== statement);
    setCurrentStatement(undefined);
    setQueue(newQueue);
  };

  const pausePlayer = () => {
    setPaused(true);
  };

  const startPlayer = () => {
    setPaused(false);
  };

  const showPlayer = () => {
    setShowMediaPlayer(true);
  };

  useEffect(() => {
    if (queue.length > 0) {
      setCurrentStatement(queue[0]);
      startPlayer();
    }
  }, [queue]);

  const setAudioTrack = async (audioFile, author, statementId, panelTitle) => {
    const audioStatement = {
      audioFile,
      author,
      statementId,
      panelTitle,
    };
    showPlayer();
    setQueue([audioStatement]);
  };

  const setAudioTrackList = (audioFiles) => {
    showPlayer();
    setQueue([...audioFiles]);
  };

  return (
    <Provider value={{
      pausePlayer,
      setAudioTrack,
      setAudioTrackList,
    }}
    >
      {children}
      <If condition={showMediaPlayer}>
        <Player
          audioStatement={currentStatement}
          running={currentStatement && showMediaPlayer && !paused}
          removeAudioTrackFromQueue={removeAudioTrackFromQueue}
          startPlayer={startPlayer}
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
