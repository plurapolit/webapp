import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import PanelList from '../PanelList/PanelList';

import styles from './CategoryBanner.module.scss';

const CategoryBanner = ({
  name, imageUrl, color, panels,
}) => {
  const ROOTIMAGEURL = process.env.REACT_APP_BUCKET_URL;

  const customStyle = {
    '--bg': `${color}`,
    '--url': `url(${ROOTIMAGEURL}/${imageUrl})`,
  };

  return (
    <section className={styles["category-banner"]} style={customStyle}>
      <div className={styles["image"]} />
      <ContentWrapper>
        <div className={styles["name"]}>{name}</div>
        <PanelList data={panels} />
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
