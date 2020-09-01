import React from "react";
import { kebabCase } from "lodash";

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
    <section id={kebabCase(name)} className={styles["category-banner"]} style={customStyle} data-test="category-banner">
      <ContentWrapper>
        <h2 className={styles["name"]}>{name}</h2>
        <PanelList data={panels} />
      </ContentWrapper>
    </section>
  );
};

export default CategoryBanner;
