import React from "react";

import ContentWrapper from "../../../layouts/ContentWrapper/ContentWrapper";
import PanelList from "../PanelList/PanelList";

import styles from "./CategoryBanner.module.scss";

const CategoryBanner = ({
  name, color, panels,
}) => {
  const customStyle = {
    "--bg": `${color}`,
  };

  return (
    <section className={styles["category-banner"]} style={customStyle} data-test="category-banner">
      <ContentWrapper>
        <h2 className={styles["name"]}>{name}</h2>
        <PanelList data={panels} />
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
