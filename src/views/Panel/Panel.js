import React from "react";
import Img from "react-image";

import Hyphen from "../../helper/HyphenHelper";
import PanelMetaTags from "./PanelMetaTags";
import styles from "./Panel.module.scss";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";
import PanelContent from "./PanelContent/PanelContent";
import { usePanelContext } from "../../contexts/PanelStoreContext/PanelStoreContext";

const Panel = ({ objectPositionTop }) => {
  const { fontColor, avatar, shortTitle } = usePanelContext();

  const customStylePanel = {
    "--color": `${fontColor}`,
  };

  const customStyleImage = {
    "--objectPosition": `${objectPositionTop ? "top" : "center"}`,
  };

  const defaultPanelImage = <div className={[styles["image"], styles["default-image"]].join(" ")} />;

  return (
    <div className={styles["panel"]} style={customStylePanel}>
      <PanelMetaTags imageUrl={avatar} />
      <div className={styles["header"]}>
        <Img
          src={avatar}
          alt={shortTitle}
          className={styles["image"]}
          style={customStyleImage}
          loader={defaultPanelImage}
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
