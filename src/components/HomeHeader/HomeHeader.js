import React from 'react';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import styles from './HomeHeader.module.scss';

const HomeHeader = () => (
  <header className={styles["home-header"]}>
    <ContentWrapper>
      <div className={styles["heading"]}>
        Ein Thema.
        <br />
        9 Meinungen.
        <br />
        <span className={styles["heading-accent"]}>
          deine Stimme.
        </span>
      </div>
    </ContentWrapper>
  </header>
);

export default HomeHeader;
