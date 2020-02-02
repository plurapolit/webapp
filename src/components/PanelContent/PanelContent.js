/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styles from './PanelContent.module.scss';

import Player from '../Player/Player';
import Statement from '../Statement/Statement';

const PanelContent = ({ content }) => {
  const [audioStatement, setAudioStatement] = useState('');
  const [showMediaPlayer, setShowMediaPlayer] = useState(false);
  const [isAutoplayed, setIsAutoplayed] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const panelTitle = content.panel.short_title;

  return (
    <div>
      <div className={styles["row"]}>
        <div className={styles.headline}>
          {content.panel.title}
        </div>
        <div className={styles.description}>{content.panel.description}</div>
        <div className={styles.wrapper}>
          <div className={styles["experts-headline"]}>Experten</div>
          {content.expert_statements.map((expert) => (
            <Statement
              key={expert.statement.id}
              expert={expert}
              setAudioStatement={setAudioStatement}
              setShowMediaPlayer={setShowMediaPlayer}
              setIsAutoplayed={setIsAutoplayed}
              setCurrentUser={setCurrentUser}
            />
          ))}
        </div>
      </div>
      {showMediaPlayer && (
        <Player
          audioStatement={audioStatement}
          isAutoplayed={isAutoplayed}
          currentUser={currentUser}
          panelTitle={panelTitle}
        />
      )}
    </div>
  );
};

export default PanelContent;
