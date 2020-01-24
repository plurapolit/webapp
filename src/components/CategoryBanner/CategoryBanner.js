import React, { useRef, useEffect } from 'react';

import styles from './CategoryBanner.module.scss';
import PanelCard from '../PanelCard/PanelCard';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const CategoryBanner = ({ name,  imageUrl, color, panels }) => {
  const refBanner = useRef(undefined);

  const ROOTIMAGEURL = process.env.REACT_APP_ROOT_IMAGE_URL;

  useEffect(() => {
    refBanner.current.style.setProperty('--color', `${color}`);
    refBanner.current.style.setProperty('--url', `url(${ROOTIMAGEURL}/${imageUrl})`);
  }, []);

  const panelLists = panels.map(({ panel }) => {
    const url = 'https://i.picsum.photos/id/730/700/500.jpg';
    const c = '#000';
    return (
      <PanelCard
        title={panel.title}
        shortTitle={panel.short_title}
        imageUrl={url}
        color={c}
      />
    );
  });

  return (
    <section ref={refBanner} className={styles["category-banner"]}>
      <div className={styles["image"]} />
      <ContentWrapper>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["container_panels"]}>
          {panelLists}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
