import React, { useState, useEffect, useRef } from 'react';

import Helper from './PanelWrapperHelper';
import Panel from '../../views/Panel/Panel';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import Loader from '../../components/Loader/Loader';

const PanelWrapper = ({ slugList }) => {
  const ABOUT_US_SLUG = '2020-wir-uber-uns';

  const [slug, setSlug] = useState(undefined);
  const panel = useRef(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const newSlug = window.location.pathname.substr(1);
    setSlug(newSlug);
  }, []);

  useEffect(() => {
    if (slug && slugList) {
      const slugObj = slugList.find(({ panel }) => panel.slug === slug);
      if (slugObj) {
        Helper.loadPanelById(slugObj.panel.id, (newPanel) => {
          panel.current = newPanel;
          setIsLoaded(true);
        });
      } else {
        setIsLoaded(true);
      }
    }
  }, [slug, slugList]);

  if (panel.current) {
    return <Panel objectPositionTop={slug === ABOUT_US_SLUG} panel={panel.current} />;
  }

  if (slug && isLoaded) {
    return <PageNotFound />;
  }

  return <Loader />;
};

export default PanelWrapper;
