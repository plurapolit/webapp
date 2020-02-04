import React from 'react';
import styles from './Panel.module.scss';
import PanelContent from '../../components/PanelContent/PanelContent';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

const Panel = ({ panel }) => {
  const customStyle = {
    '--color': `${panel.panel.font_color}`,
  };

  return (
    <div className={styles["panel"]} style={customStyle}>
      <div className={styles["header"]}>
        <img
          src={`${IMAGEROOTURL}/${panel.panel_avatar_key}`}
          alt={panel.panel.short_title}
          className={styles["image"]}
        />
        <div className={styles["wrapper"]}>
          <ContentWrapper>
            <div className={styles["headline"]}>{panel.panel.short_title}</div>
          </ContentWrapper>
          <div className={styles["rounder"]} />
        </div>

      </div>
      <ContentWrapper>
        <PanelContent content={panel} />
      </ContentWrapper>
    </div>
  );
};

export default Panel;
