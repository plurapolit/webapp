/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { If } from "react-if";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import HomePageMetaTags from "../HomePage/HomePageMetaTag";
import NRWHeader from "./NRWHeader/NRWHeader";
import MoreSection from "../HomePage/MoreSection/MoreSection";
import CategoryList from "../HomePage/CategoryList/CategoryList";
import Feedback from "../HomePage/Feedback/Feedback";
import Supporters from "../HomePage/Supporters/Supporters";
import styles from "../HomePage/HomePage.module.scss";
import Text from "../../components/Text/Text";
import ContentWrapper from "../../layouts/ContentWrapper/ContentWrapper";

const HomePage = () => {
  const { categoryList } = useStoreContext();
  return (
    <div>
      <HomePageMetaTags />
      <NRWHeader />
      <ContentWrapper>
        <Text>
          <p style={{ padding: "3rem 0" }}>
            Am 13. September sind Kommunalwahlen in ganz Nordrhein-Westfalen.
            Deshalb haben wir allen Spitzenkandidat/-innen für den Posten
            des/der Oberbürgermeisters/-in (OB) vier Diskussionsfragen geschickt.
            Als gemeinnützige Initiative bieten wir mit dem NRW Memo-Mat eine Wahlhilfe
            von jungen Menschen für junge Menschen an, um sich vor der Wahl zu informieren.
          </p>
        </Text>
      </ContentWrapper>
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
