import React from 'react';

import styles from './PanelList.module.scss';
import PanelCard from '../PanelCard/PanelCard';

const PanelList = ({ data }) => {
  const URL = process.env.REACT_APP_BUCKETNAME;
  const list = data.map(({ panel, experts, panel_avatar }) => {
    return (
      <PanelCard
        key={panel.id}
        title={panel.title}
        shortTitle={panel.short_title}
        imageUrl={`${URL}/${panel_avatar}`}
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
