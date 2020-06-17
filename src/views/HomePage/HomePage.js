/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { If } from "react-if";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import HomePageMetaTags from "./HomePageMetaTag";
import HomeHeader from "./HomeHeader/HomeHeader";
import CategoryList from "./CategoryList/CategoryList";
import PvtLanding from "./PvtLanding/PvtLanding";
import Supporters from "./Supporters/Supporters";
import About from "./About/About";
import SubscribeToPrivateRoomUpdates from "./SubscribeToPrivateRoomUpdates/SubscribeToPrivateRoomUpdates";

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
      <PvtLanding />
      <SubscribeToPrivateRoomUpdates />
      <Supporters />
    </div>
  );
};

export default HomePage;
