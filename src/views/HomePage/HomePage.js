/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { If } from "react-if";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import HomePageMetaTags from "./HomePageMetaTag";
import HomeHeader from "./HomeHeader/HomeHeader";
import About from "./About/About";
import MoreSection from "./MoreSection/MoreSection";
import CategoryList from "./CategoryList/CategoryList";
import Feedback from "./Feedback/Feedback";
import Supporters from "./Supporters/Supporters";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { categoryList } = useStoreContext();
  return (
    <div>
      <HomePageMetaTags />
      <HomeHeader />
      <About />
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
