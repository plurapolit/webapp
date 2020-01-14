import React, { useState, useRef } from 'react';
import ReactHowler from 'react-howler';
import { css } from 'glamor';
// import { cssMaxBreakpoint, cssMinBreakpoint } from '../styles/Breakpoints';
import colors from '../styles/Colors';

const keyframes = {
  moveInFromButton: css.keyframes({
    '0%': {
      opacity: 0,
      position: 'absolute',
      bottom: 0,
      zIndex: -1,
    },
    '100%': { opacity: 1, zIndex: 1 },
  }),
};

const styles = {
  playerWrapper: css({
    backgroundColor: colors.playerWhite,
    position: "absolute",
    // padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 100,
    left: 0,
    width: "100%",
    animation: `${keyframes.moveInFromButton} 1s ease-in-out`
  }),
  audioPlayerStyle: css({
    width: 1000,
  }),
};

const Player = () => {
  const [playerActive, setPlayerActive] = useState(false);

  // const playerRef = useRef();

  const showPlayer = () => {
    setPlayerActive(true);
  };

  return (
    <div>
      <button onClick={showPlayer}>Play me</button>
      {playerActive && (
        <div {...styles.playerWrapper}>
          <audio controls {...styles.audioPlayerStyle}>
            <source src="https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default Player;
