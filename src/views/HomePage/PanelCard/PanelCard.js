import React from "react";
import { Link } from "react-router-dom";

import ExpertsList from "../ExpertsList/ExpertsList";
import playerImage from "../../../assets/images/play.svg";
import styles from "./PanelCard.module.scss";

const PanelCard = ({
  title, imageUrl, color, shortTitle, slug, experts,
}) => {
  const customStyle = {
    "--url": `url(${imageUrl})`,
    "--color": `${color}`,
  };

  return (
    <div className={styles["panel-card"]}>
      <div className={styles["playAllButton"]}>
        <img src={playerImage} alt="play" />
      </div>
      <Link to={`${slug}`}>
        <div className={styles["question-banner"]} style={customStyle} data-test="panel-card">
          <div className={styles["image-wrapper"]}>
            <div className={styles["shortTitle"]}>{shortTitle}</div>
          </div>
          <div className={styles["detail-wrapper"]}>
            <div className={styles["title"]}>{title}</div>
            <div className={styles["experts-wrapper"]}>
              <ExpertsList experts={experts} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PanelCard;
