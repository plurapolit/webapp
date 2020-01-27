import React, { useEffect, useRef } from 'react';
import styles from './Panel.module.scss';
import PanelContent from '../../components/PanelContent/PanelContent';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

const IMAGEROOTURL = process.env.REACT_APP_BUCKETNAME;

const Panel = ({ panel }) => {
  // console.log('panel ', panel);
  const refPanel = useRef(undefined);

  useEffect(() => {
    const color = panel.panel.font_color;
    refPanel.current.style.setProperty('--color', color);
  }, []);

  return (
    <div ref={refPanel} className={styles["panel"]}>
      <img
        src={`${IMAGEROOTURL}/${panel.panel_avatar_key}`}
        alt={panel.category.name}
        className={styles["image"]}
      />
      <div className={styles["container"]}>
        <ContentWrapper>
          <div className={styles["headline"]}>{panel.category.name}</div>
        </ContentWrapper>
        <div className={styles["bg"]}>
          <ContentWrapper>
            <PanelContent content={panel} />
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Panel;
