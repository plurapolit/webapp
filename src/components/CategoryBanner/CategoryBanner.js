import React, { useRef, useEffect } from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import PanelList from '../PanelList/PanelList';

import styles from './CategoryBanner.module.scss';

const CategoryBanner = ({ name,  imageUrl, color, panels }) => {
  const refBanner = useRef(undefined);

  const ROOTIMAGEURL = process.env.REACT_APP_ROOT_IMAGE_URL;

  useEffect(() => {
    refBanner.current.style.setProperty('--color', `${color}`);
    refBanner.current.style.setProperty('--url', `url(${ROOTIMAGEURL}/${imageUrl})`);
  }, []);

  return (
    <section ref={refBanner} className={styles["category-banner"]}>
      <div className={styles["image"]} />
      <ContentWrapper>
        <div className={styles["name"]}>{name}</div>
        <PanelList data={panels} />
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
