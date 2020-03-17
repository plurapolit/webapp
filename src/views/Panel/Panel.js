import React from "react";
import PanelMetaTags from "./PanelMetaTags";
import styles from "./Panel.module.scss";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";
import Hyphen from "../../helper/HyphenHelper";
import PanelContent from "./PanelContent/PanelContent";
import { usePanelContext } from "../../contexts/PanelStoreContext/PanelStoreContext";

const Panel = ({ objectPositionTop }) => {
  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;
  const { fontColor, avatarKey, shortTitle } = usePanelContext();

  const customStylePanel = {
    "--color": `${fontColor}`,
  };

  const customStyleImage = {
    "--objectPosition": `${objectPositionTop ? "top" : "center"}`,
  };

  const imageUrl = `${IMAGEROOTURL}/${avatarKey}`;

  return (
    <div className={styles["panel"]} style={customStylePanel}>
      <PanelMetaTags image={imageUrl} />
      <div className={styles["header"]}>
        <img
          src={imageUrl}
          alt={shortTitle}
          className={styles["image"]}
          style={customStyleImage}
        />
        <div className={styles["wrapper"]}>
          <ContentWrapper>
            <Hyphen>
              <div className={styles["headline"]}>{shortTitle}</div>
            </Hyphen>
          </ContentWrapper>
          <div className={styles["rounder"]} />
        </div>
      </div>
      <ContentWrapper>
        <PanelContent />
      </ContentWrapper>
    </div>
  );
};

export default Panel;
