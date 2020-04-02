import React, {
  useState,
  useContext,
  useRef,
  useEffect,
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
  const [currentStatements, setCurrentStatements] = useState();
  const [currentStatement, setCurrentStatement] = useState();
  const [paused, setPaused] = useState(false);
  const { current } = useRef(Queue.create());
  const queue = current;

  const createIntroStatement = (statement) => ({
    ...statement,
    content: {
      ...statement.content,
      audioFile: statement.content.intro,
    },
  });

  const setAudioTrackToCurrentStatements = (statement) => {
    const statementList = [];
    if (statement.content.intro) statementList.push(createIntroStatement(statement));
    statementList.push(statement);
    setCurrentStatements(statementList);
  };

  const playNextAudioTrack = () => {
    const restStatements = currentStatements.slice(1);
    if (restStatements.length <= 0) setAudioTrackToCurrentStatements(queue.nextAudioTrack());
    if (restStatements.length > 0) setCurrentStatements(restStatements);
  };

  const playPrevAudioTrack = () => setAudioTrackToCurrentStatements(queue.prevAudioTrack());
  const pausePlayer = () => setPaused(true);

  const startPlayer = () => {
    setShowMediaPlayer(true);
    setAudioTrackToCurrentStatements(queue.currentAudioTrack());
    setPaused(false);
  };

  useEffect(() => {
    if (currentStatements && currentStatements.length > 0) {
      setCurrentStatement(currentStatements[0]);
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
        <Player
          audioStatement={currentStatement}
          running={currentStatement && showMediaPlayer && !paused}
          playNextAudioTrack={playNextAudioTrack}
          playPrevAudioTrack={playPrevAudioTrack}
          setPaused={setPaused}
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
