import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'glamor';
// import { cssMaxBreakpoint, cssMinBreakpoint } from '../styles/Breakpoints';
import colors from '../styles/Colors';
import './pl'

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
    backgroundColor: 'colors.playerWhite',
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

const Player = ({ playerActive }) => {
  const tracks = [
    { track: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { track: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { track: "https://plurapolit.de/wp-content/uploads/2019/11/plura-sample.mp3" },
  ];

  return (
    <div>
      {/* <a href="/">back</a>
      <button onClick={showPlayer}>Play me</button> */}
      {playerActive && (
        <div {...styles.playerWrapper}>
          <audio controls {...styles.audioPlayerStyle}>
            {tracks.map(track => {
              return (
                <source src={track.track} />
              );
            })}
          </audio>
        </div>
      )}
    </div>
  );
};

export default Player;
