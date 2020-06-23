/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { If } from "react-if";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import HomePageMetaTags from "./HomePageMetaTag";
import HomeHeader from "./HomeHeader/HomeHeader";
import CategoryList from "./CategoryList/CategoryList";
import PvtLanding from "./PvtLanding/PvtLanding";
import Supporters from "./Supporters/Supporters";
import SubscribeToPrivateRoomUpdates from "./SubscribeToPrivateRoomUpdates/SubscribeToPrivateRoomUpdates";
import TutorialTasks from "../../components/TutorialTasks/TutorialTasks";


const HomePage = () => {
  const { categoryList } = useStoreContext();
  return (
    <div>
      <HomePageMetaTags />
      <TutorialTasks />
      <HomeHeader />
      <PvtLanding />
      <If condition={!!categoryList}>
        <CategoryList />
      </If>
      <SubscribeToPrivateRoomUpdates />
      <Supporters />
    </div>
  );
};

export default HomePage;
