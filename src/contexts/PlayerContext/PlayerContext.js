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
  const { current } = useRef(Queue.create());
  const queue = current;

  const playNextAudioTrack = () => setCurrentStatement(queue.nextAudioTrack());
  const playPrevAudioTrack = () => setCurrentStatement(queue.prevAudioTrack());
  const pausePlayer = () => setPaused(true);

  const startPlayer = () => {
    setShowMediaPlayer(true);
    setCurrentStatement(queue.currentAudioTrack());
    setPaused(false);
  };

  return (
    <Provider value={{
      queue,
      startPlayer,
      pausePlayer,
      paused,
      currentStatement,
      playedAudioTrackList: queue.playedAudioTracks(),
    }}
    >
      {children}
      <If condition={showMediaPlayer}>
        <Player
          audioStatement={currentStatement}
          running={currentStatement && showMediaPlayer && !paused}
          playNextAudioTrack={playNextAudioTrack}
          playPrevAudioTrack={playPrevAudioTrack}
          startPlayer={startPlayer}
          pausePlayer={pausePlayer}
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
