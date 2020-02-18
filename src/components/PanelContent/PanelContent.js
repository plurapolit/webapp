/* eslint-disable react/button-has-type */
import React, { useState } from "react";

import Player from "../Player/Player";
import Statement from "../Statement/Statement";
import PiwikMessages from "../../helper/PiwikMessages";

import styles from "./PanelContent.module.scss";

const PanelContent = ({ content }) => {
  const [audioStatement, setAudioStatement] = useState("");
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);
  const [isAutoplayed, setIsAutoplayed] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [playerIsStopped, setPlayerIsStopped] = useState(true);

  const panelTitle = content.panel.short_title;
  const stopPlayer = () => {
    setPlayerIsStopped(true);
    PiwikMessages.statement.stop(panelTitle, currentUser, audioStatement);
  };

  const startPlayer = () => {
    setPlayerIsStopped(false);
    PiwikMessages.statement.start(panelTitle, currentUser, audioStatement);
  };

  return (
    <div>
      <div className={styles.headline}>{content.panel.title}</div>
      <div className={styles.description}>{content.panel.description}</div>
      <div className={styles.wrapper}>
        <div className={styles["experts-headline"]}>Expert/-innen</div>
        {content.expert_statements.map((expert) => (
          <Statement
            key={expert.statement.id}
            expert={expert}
            setAudioStatement={setAudioStatement}
            setShowMediaPlayer={setShowMediaPlayer}
            setIsAutoplayed={setIsAutoplayed}
            setCurrentUser={setCurrentUser}
            stopPlayer={stopPlayer}
            startPlayer={startPlayer}
          />
        ))}
      </div>
      <div className={styles["disclaimer"]}>
        Alle zur Hamburgischen Bürgerschaftswahl 2020 antretenden Parteien
        wurden zur Mitwirkung auf PluraPolit angefragt. Nicht alle angefragten
        Parteien haben jedoch bislang Statements abgegeben.
      </div>
      {showMediaPlayer && (
        <Player
          audioStatement={audioStatement}
          isAutoplayed={isAutoplayed}
          currentUser={currentUser}
          panelTitle={panelTitle}
          isStopped={playerIsStopped}
          startPlayer={startPlayer}
        />
      )}
    </div>
  );
};

export default PanelContent;
