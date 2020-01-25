import React, { useState, useEffect, useRef } from 'react';

import styles from './Panel.module.scss';
import Text from '../../components/Text/Text';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';

const IMAGEROOTURL = process.env.REACT_APP_ROOT_IMAGE_URL;

const Panel = ({ panel }) => {
  console.log('panel ', panel);
  const refPanel = useRef(undefined);

  useEffect(() => {
    const color = '#0000CC';
    refPanel.current.style.setProperty('--color', color);
  }, []);

  return (
    <div ref={refPanel} className={styles["panel"]}>
      <img
        src={`${IMAGEROOTURL}/${panel.category_avatar_key}`}
        alt={panel.category.name}
        className={styles["image"]}
      />
      <div className={styles["container"]}>
        <ContentWrapper>
          <div className={styles["headline"]}>
            {panel.category.name}
          </div>
        </ContentWrapper>
        <div className={styles["bg"]}>
          <ContentWrapper>
            <Text headline={panel.panel.title}>
              {panel.panel.description}
            </Text>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default Panel;
