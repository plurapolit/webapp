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

  const playNextAudioTrack = () => setCurrentStatement(queue.nextAudioTrack().content);
  const playPrevAudioTrack = () => setCurrentStatement(queue.prevAudioTrack().content);

  const nextAudioTrackIsPresent = () => {
    console.log('queue.nextAudioTrackIsPresent()', queue.nextAudioTrackIsPresent())
    return queue.nextAudioTrackIsPresent();
  }
  const prevAudioTrackIsPresent = () => {
    console.log('queue.prevAudioTrackIsPresent()', queue.prevAudioTrackIsPresent())
    return queue.prevAudioTrackIsPresent();
  }

  const pausePlayer = () => setPaused(true);

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
          nextAudioTrackIsPresent={nextAudioTrackIsPresent()}
          prevAudioTrackIsPresent={prevAudioTrackIsPresent()}
          showSkipControls
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
