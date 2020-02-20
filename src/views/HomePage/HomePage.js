/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from "react";

import { StoreContext } from "../../contexts/Store/StoreContext";
import HomePageMetaTags from "./HomePageMetaTag";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import About from "../../components/About/About";
import MoreSection from "../../components/MoreSection/MoreSection";
import { isLoaded } from "../../helper/helper";
import CategoryList from "../../components/CategoryList/CategoryList";
import Feedback from "../../components/Feedback/Feedback";
import Supporters from "../../components/Supporters/Supporters";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { categoryList } = useContext(StoreContext);
  return (
    <div>
      <HomePageMetaTags />
      <HomeHeader />
      <About />
      {isLoaded(categoryList, <CategoryList />)}
      <div className={styles["bottom-wrapper"]}>
        <MoreSection />
        <Feedback />
        <Supporters />
      </div>
    </div>
  );
};

export default HomePage;
