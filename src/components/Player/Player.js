import React from "react";

const Player = ({ file, playerActive }) => {
  return (
    <div>
      {playerActive && (
        <div style={{ width: 1000 }}>
          <audio
            controls
            track="track desc"
            autoPlay
          >
            <source src={file} />
          </audio>
        </div>
      )}
    </div>
  );
};

export default Player;
