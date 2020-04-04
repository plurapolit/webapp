import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Helper from "./PanelWrapperHelper";
import Panel from "../../views/Panel/Panel";
import PageNotFound from "../../views/PageNotFound/PageNotFound";
import Loader from "../../components/Loader/Loader";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import { PanelStore } from "../../contexts/PanelStoreContext/PanelStoreContext";

const PanelWrapper = () => {
  const [currentPanel, setCurrentPanel] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slugList } = useStoreContext();
  const { slug } = useParams();

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
      <PanelStore panel={currentPanel}>
        <Panel objectPositionTop={isAboutUsSlug()} panel={currentPanel} />
      </PanelStore>
    );
  }

  if (slug && isLoaded) {
    return <PageNotFound />;
  }

  return <Loader />;
};

export default PanelWrapper;
