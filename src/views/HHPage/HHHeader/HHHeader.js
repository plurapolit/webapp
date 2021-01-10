import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import styles from "../../HomePage/HomeHeader/HomeHeader.module.scss";

const HomeHeader = () => (
  <header className={styles["home-header"]}>
    <ContentWrapper>
      <div className={styles["heading"]}>
        5 Fragen
        <br />
        Eine Stadt
        <br />
        <span className={styles["heading-accent"]}>Deine Wahl</span>
      </div>
    </ContentWrapper>
  </header>
);

export default HomeHeader;
