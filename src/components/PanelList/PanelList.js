import React from 'react';

import styles from './PanelList.module.scss';
import PanelCard from '../PanelCard/PanelCard';

const PanelList = ({ data }) => {
  const URL = process.env.REACT_APP_BUCKETNAME;
  const list = data.map(({ panel, experts }) => {
    const url = `${URL}/lwm4qgq7dij2uy2zppuaypwwijqt`;
    return (
      <PanelCard
        key={panel.id}
        title={panel.title}
        shortTitle={panel.short_title}
        imageUrl={url}
        color={panel.font_color}
        slug={panel.slug}
        experts={experts}
      />
    );
  });

  return (
    <div className={styles["panel-list"]}>
      {list}
    </div>
  );
};

export default PanelList;
