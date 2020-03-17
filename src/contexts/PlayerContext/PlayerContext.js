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

  const nextSongIsPresent = () => {
    console.log('queue.nextSongIsPresent()', queue.nextSongIsPresent())
    return queue.nextSongIsPresent();
  }
  const prevSongIsPresent = () => {
    console.log('queue.prevSongIsPresent()', queue.prevSongIsPresent())
    return queue.prevSongIsPresent();
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
          nextSongIsPresent={nextSongIsPresent()}
          prevSongIsPresent={prevSongIsPresent()}
          showSkipControls
        />
      </If>
    </Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);

export { PlayerWrapper as Player, Provider as PlayerProvider, usePlayerContext };
