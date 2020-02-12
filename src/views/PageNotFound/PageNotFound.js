import React from "react";

import styles from "./PageNotFound.module.scss";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Button from "../../components/Button/Button";

const PageNotFound = () => (
  <>
    <div className={styles["page-not-found"]}>
      <ContentWrapper>
        <div className={styles["page-not-found-wrapper"]}>
          <h2>404</h2>
          <div className={styles["page-not-found-text"]}>
            Auf dieser Seite diskutiert heute leider keiner, aber besuch doch
            eine unserer anderen Seiten.
          </div>
          <Button to="/">Startseite</Button>
        </div>
      </ContentWrapper>
    </div>
  </>
);

export default PageNotFound;
