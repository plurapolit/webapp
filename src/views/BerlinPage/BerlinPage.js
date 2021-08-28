/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { If } from "react-if";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import HomePageMetaTags from "../HomePage/HomePageMetaTag";
import BerlinHeader from "./BerlinHeader/BerlinHeader";
import MoreSection from "../HomePage/MoreSection/MoreSection";
import CategoryList from "../HomePage/CategoryList/CategoryList";
import Feedback from "../HomePage/Feedback/Feedback";
import Supporters from "../HomePage/Supporters/Supporters";
import styles from "../HomePage/HomePage.module.scss";

const HomePage = () => {
  const { categoryList } = useStoreContext();
  return (
    <div>
      <HomePageMetaTags />
      <BerlinHeader />
      <If condition={!!categoryList}>
        <CategoryList />
      </If>
      <div className={styles["bottom-wrapper"]}>
        <MoreSection />
        <Feedback />
        <Supporters />
      </div>
    </div>
  );
};

export default HomePage;
