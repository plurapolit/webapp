import React from 'react';

import Panel from './Panel';

const Panels = ({ panels }) => {
  const list = panels.map((panel, index) => <Panel key={index} title={panel.title} />);
  return (
    <>
      {list}
    </>
  );
};

export default Panels;
