import React, { useState, useEffect, useContext } from "react";

import Helper from "./PanelWrapperHelper";
import Panel from "../../views/Panel/Panel";
import PageNotFound from "../../views/PageNotFound/PageNotFound";
import Loader from "../../components/Loader/Loader";
import { StoreContext } from "../../contexts/Store/StoreContext";

const PanelWrapper = ({ location }) => {
  const [currentPanel, setCurrentPanel] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slugList } = useContext(StoreContext);

  const slug = Helper.getSlug(location);
  const isAboutUsSlug = () => slug === Helper.ABOUT_US_SLUG;

  useEffect(() => {
    if (slug && slugList) {
      const slugObj = slugList.find(({ panel }) => panel.slug === slug);
      if (slugObj) {
        Helper.loadPanelById(slugObj.panel.id, (newPanel) => {
          setCurrentPanel(newPanel);
          setIsLoaded(true);
        });
      } else {
        setCurrentPanel(undefined);
        setIsLoaded(true);
      }
    }
  }, [slug, slugList]);

  if (currentPanel) {
    return (
      <Panel objectPositionTop={isAboutUsSlug()} panel={currentPanel} />
    );
  }

  if (slug && isLoaded) {
    return <PageNotFound />;
  }

  return <Loader />;
};

export default PanelWrapper;
