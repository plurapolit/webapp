import React, { useState, useEffect } from 'react';

import { isLoaded } from '../../helper/helper';

const getPanelId = (list, slug) => {
  const element = list.find((ele) => ele.slug === slug);
  if (element) {
    return element.id;
  }
  return undefined;
};

const Panel = ({ slugList }) => {
  const [slug, setSlug] = useState(undefined);
  console.log('slugList ', slugList);

  useEffect(() => {
    const newSlug = window.location.pathname.substr(1);
    setSlug(newSlug);
  }, []);

  const loadPanel = () => {};

  if (slug) {
    const panelId = getPanelId(slugList, slug);
    if (!panelId) {
      return <p>404 page not found</p>;
    }
    loadPanel();
    return <p>Page found</p>;
  }


  return (
    <p>Hello There</p>
  );
};

export default Panel;
