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

  const getCurrentStatementsFromAudioTrack = (statement) => {
    const { content, notIntro } = statement;
    if (!statement) return undefined;
    const statementList = [];
    if (content.intro && !notIntro) statementList.push(createIntroStatement(statement));
    statementList.push(statement);
    return statementList;
  };

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
