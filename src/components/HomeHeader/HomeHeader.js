import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
  return (
    <div className={styles["home-header"]}>
      <ContentWrapper>
          <h1 className={styles["heading"]}>
            <u>Hör dir an,</u> 
            <br/>was Politiker 
            <br/>denken.
          </h1>
        </ContentWrapper>
      </div>
  );
}

export default HomeHeader;