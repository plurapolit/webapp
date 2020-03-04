import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import PanelList from "../PanelList/PanelList";

import styles from "./CategoryBanner.module.scss";

const CategoryBanner = ({
  name, imageUrl, color, panels,
}) => {
  const ROOTIMAGEURL = process.env.REACT_APP_BUCKET_URL;

  const customStyle = {
    "--bg": `${color}`,
  };

  return (
    <section className={styles["category-banner"]} style={customStyle} data-test="CategoryBanner">
      <img
        src={`${ROOTIMAGEURL}/${imageUrl}`}
        alt={name}
        className={styles["image"]}
      />
      <ContentWrapper>
        <div className={styles["name"]}>{name}</div>
        <PanelList data={panels} />
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
