import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import PiwikMessages from "../../helper/PiwikMessages";

import styles from "./Player.module.scss";

const PlayerContext = React.createContext();
const { Provider } = PlayerContext;

const Player = ({
  children,
  show = false,
}) => {
  const [showMediaPlayer, setShowMediaPlayer] = useState(show);
  const [audioStatement, setAudioStatement] = useState("");
  const [author, setAuthor] = useState("");
  const [panelTitle, setPanelTitle] = useState();
  const player = useRef();

  const stopPlayer = () => {
    player.current.audio.pause();
    PiwikMessages.statement.stop(panelTitle, author, audioStatement);
  };

  const startPlayer = () => {
    player.current.audio.play();
    PiwikMessages.statement.start(panelTitle, author, audioStatement);
  };

  const setSong = async (audioFile, newAuthor) => {
    setShowMediaPlayer(true);
    setAudioStatement(audioFile);
    setAuthor(newAuthor);
  };

  useEffect(() => {
    const setAudioTitleForMatomo = () => {
      if (player.current) {
        player.current.audio.setAttribute(
          "data-matomo-title",
          `${panelTitle} | ${author} (${audioStatement})`,
        );
      }
    };
    setAudioTitleForMatomo();
  }, [panelTitle, author, audioStatement]);

  return (
    <Provider value={{
      stopPlayer,
      setSong,
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
              showVolumeControl={false}
              showLoopControl={false}
              progressJumpStep={10000}
              ref={player}
              onPlay={() => startPlayer()}
            />
          </div>
        </div>
      )}
    </Provider>
  );
};

export { Player, PlayerContext };
