import React, { useState, useEffect, useRef } from 'react';

import Helper from './PanelWrapperHelper';
import Panel from '../../views/Panel/Panel';
import PageNotFound from '../../views/PageNotFound/PageNotFound';

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
      const slugObj = slugList.find((slugItem) => slugItem.slug === slug);
      if (slugObj) {
        Helper.loadPanelById(slugObj.id, (newPanel) => {
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

  return <p>Loading...</p>;
};

export default PanelWrapper;
