import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => {
  return (
    <header className={styles["home-header"]}>
      <ContentWrapper>
          <div className={styles["heading"]}>
            <u>Hör dir an,</u> 
            <br/>was Politiker 
            <br/>denken.
          </div>
        </ContentWrapper>
      </header>
  );
}

export default HomeHeader;