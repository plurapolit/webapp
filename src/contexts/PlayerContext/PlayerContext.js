import React, {
  useState,
  useContext,
  useRef,
} from "react";
import { If } from "react-if";

import Queue from "./Queue/Queue";
import Player from "./Player/Player";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const PlayerWrapper = ({
  children,
  show = false,
}) => {
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [currentStatement, setCurrentStatement] = useState();
  const [paused, setPaused] = useState(false);
  const { current: queue } = useRef(Queue.create());

  const playNextAudioTrack = () => {
    setCurrentStatement(queue.nextAudioTrack().content);
  };

  const pausePlayer = () => {
    setPaused(true);
  };

  const startPlayer = () => {
    setShowMediaPlayer(true);
    setCurrentStatement(queue.currentAudioTrack().content);
    setPaused(false);
  };

  const setAudioTrack = async (audioTrack) => {
    queue.setAudioTrack(audioTrack);
    startPlayer();
  };

  const setAudioTrackList = (audioTrackList) => {
    queue.setAudioTrackList(audioTrackList);
    startPlayer();
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
          playNextAudioTrack={playNextAudioTrack}
          startPlayer={startPlayer}
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
