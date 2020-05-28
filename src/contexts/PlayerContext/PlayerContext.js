import React, {
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { If } from "react-if";

import Queue from "./Queue/Queue";
import Player from "./Player/Player";
import { getCurrentStatementsFromAudioTrack } from "../../helper/AudioTrackHelper";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const PlayerWrapper = ({
  children,
  show = false,
}) => {
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [currentStatements, setCurrentStatements] = useState();
  const [currentStatement, setCurrentStatement] = useState();
  const [paused, setPaused] = useState(false);
  const { current } = useRef(Queue.create());
  const queue = current;

  const playNextAudioTrack = () => {
    const restStatements = currentStatements.slice(1);
    if (restStatements.length <= 0) {
      const introAndStatement = getCurrentStatementsFromAudioTrack(queue.nextAudioTrack());
      setCurrentStatements(introAndStatement);
    }
    if (restStatements.length > 0) setCurrentStatements(restStatements);
  };

  const playPrevAudioTrack = () => {
    setCurrentStatements(getCurrentStatementsFromAudioTrack(queue.prevAudioTrack()));
  };
  const pausePlayer = () => setPaused(true);
  const stopPlayer = () => {
    setPaused(true);
    setShowMediaPlayer(false);
    setCurrentStatements(null);
  };

  const startPlayer = () => {
    setShowMediaPlayer(true);
    const introAndStatement = getCurrentStatementsFromAudioTrack(queue.currentAudioTrack());
    setCurrentStatements(introAndStatement);
    setPaused(false);
  };

  useEffect(() => {
    if (currentStatements && currentStatements.length > 0) {
      setCurrentStatement(currentStatements[0]);
    } else {
      setCurrentStatement(undefined);
    }
  }, [currentStatements]);

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
        <>
          <Player
            audioStatement={currentStatement}
            running={currentStatement && showMediaPlayer && !paused}
            playNextAudioTrack={playNextAudioTrack}
            playPrevAudioTrack={playPrevAudioTrack}
            setPaused={setPaused}
            stopPlayer={stopPlayer}
          />
        </>
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
