import React, { useState, useEffect, useRef } from 'react';

import Helper from './PanelWrapperHelper';
import Panel from '../../views/Panel/Panel';
import PageNotFound from '../../views/PageNotFound/PageNotFound';
import Loader from '../../components/Loader/Loader';

const PanelWrapper = ({ slugList }) => {
  const [slug, setSlug] = useState(undefined);
  const panel = useRef(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const newSlug = window.location.pathname.substr(1);
    setSlug(newSlug);
  }, []);

  useEffect(() => {
    if (slug) {
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
  }, [slug]);

  if (panel.current) {
    return <Panel panel={panel.current} />;
  }

  if (slug && isLoaded) {
    return <PageNotFound />;
  }

  return <Loader />;
};

export default PanelWrapper;
