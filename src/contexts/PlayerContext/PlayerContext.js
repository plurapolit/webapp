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

  const removeAudioFromQueue = (statement) => {
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

  const setAudio = async (audioFile, author, statementId, panelTitle) => {
    const audioStatement = {
      audioFile,
      author,
      statementId,
      panelTitle,
    };
    showPlayer();
    setQueue([audioStatement]);
  };

  const setAudios = (audioFiles) => {
    showPlayer();
    setQueue([...audioFiles]);
  };

  return (
    <Provider value={{
      pausePlayer,
      setAudio,
      setAudios,
    }}
    >
      {children}
      <If condition={showMediaPlayer}>
        <Player
          audioStatement={currentStatement}
          running={currentStatement && showMediaPlayer && !paused}
          removeAudioFromQueue={removeAudioFromQueue}
          startPlayer={startPlayer}
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
