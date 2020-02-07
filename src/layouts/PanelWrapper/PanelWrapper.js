import React, { useState, useEffect, useRef } from 'react';

import Helper from './PanelWrapperHelper';
import Panel from '../../views/Panel/Panel';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import Loader from '../../components/Loader/Loader';

const PanelWrapper = ({ slugList, location }) => {
  const [panel, setPanel] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  const slug = Helper.getSlug(location);

  useEffect(() => {
    if (slug && slugList) {
      const slugObj = slugList.find(({ panel }) => panel.slug === slug);
      if (slugObj) {
        Helper.loadPanelById(slugObj.panel.id, (newPanel) => {
          setPanel(newPanel);
          setIsLoaded(true);
        });
      } else {
        setPanel(undefined);
        setIsLoaded(true);
      }
    }
  }, [slug, slugList]);

  if (panel) {
    return <Panel objectPositionTop={slug === Helper.ABOUT_US_SLUG} panel={panel} />;
  }

  if (slug && isLoaded) {
    return <PageNotFound />;
  }

  return <Loader />;
};

export default PanelWrapper;
