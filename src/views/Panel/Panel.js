import React from "react";
import PanelMetaTags from "./PanelMetaTags";
import styles from "./Panel.module.scss";
import PanelContent from "../../components/PanelContent/PanelContent";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const Panel = ({ panel, objectPositionTop }) => {
  const IMAGEROOTURL = process.env.REACT_APP_BUCKET_URL;

  const customStylePanel = {
    "--color": `${panel.panel.font_color}`,
  };

  const customStyleImage = {
    "--objectPosition": `${objectPositionTop ? "top" : "center"}`,
  };

  const imageUrl = `${IMAGEROOTURL}/${panel.panel_avatar_key}`;

  return (
    <div className={styles["panel"]} style={customStylePanel}>
      <PanelMetaTags panel={panel.panel} image={imageUrl} />
      <div className={styles["header"]}>
        <img
          src={imageUrl}
          alt={panel.panel.short_title}
          className={styles["image"]}
          style={customStyleImage}
        />
        <div className={styles["wrapper"]}>
          <ContentWrapper>
            <div className={styles["headline"]}>{panel.panel.short_title}</div>
          </ContentWrapper>
          <div className={styles["rounder"]} />
        </div>
      </div>
      <ContentWrapper>
        <PanelContent content={panel} />
      </ContentWrapper>
    </div>
  );
};

export default Panel;
