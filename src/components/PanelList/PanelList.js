import React from 'react';

import styles from './PanelList.module.scss';
import PanelCard from '../PanelCard/PanelCard';

const PanelList = ({ data }) => {

  const list = data.map(({ panel }) => {
    console.log('panel ', panel);
    const url = 'https://i.picsum.photos/id/730/700/500.jpg';
    const c = '#000';
    return (
      <PanelCard
        title={panel.title}
        shortTitle={panel.short_title}
        imageUrl={url}
        color={c}
        slug={panel.slug}
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
