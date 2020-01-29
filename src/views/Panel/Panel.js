import React from 'react';
import styles from './Panel.module.scss';
import PanelContent from '../../components/PanelContent/PanelContent';

const IMAGEROOTURL = process.env.REACT_APP_BUCKETNAME;

const Panel = ({ panel }) => {

  const customStyle = {
    '--color': `${panel.panel.font_color}`,
  }

  return (
    <div className={styles["panel"]} style={customStyle}>
      <img
        src={`${IMAGEROOTURL}/${panel.panel_avatar_key}`}
        alt={panel.category.name}
        className={styles["image"]}
      />
      <div className={styles["container"]}>
        <div className={styles["bg"]}>  
          <div className={styles["row"]}>
          <div className={styles["headline"]}>{panel.category.name}</div>
            <PanelContent content={panel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
