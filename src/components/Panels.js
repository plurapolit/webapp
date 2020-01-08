import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';

const Panels = ({ panels }) => {
  const list = panels.map((panel) => <Panel title={panel.title} />);
  return (
    <>
      {list}
    </>
  );
};

Panels.propTypes = {
  panels: PropTypes.arrayOf,
};

Panels.defaultProps = {
  panels: [],
};

export default Panels;
