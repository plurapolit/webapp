/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { If } from "react-if";
import Button, { ButtonStyle } from "../../../components/Button/Button";

import styles from "./PanelList.module.scss";
import PanelCard from "../PanelCard/PanelCard";
import PanelApi from "../../../api/PanelApi";
import Loader from "../../../components/Loader/Loader";

const getPanelCardFromArray = (array) => {
  const list = array.map(({ panel, panel_avatar, experts }) => (
    <PanelCard
      key={panel.id}
      title={panel.title}
      shortTitle={panel.short_title}
      imageUrl={panel_avatar}
      color={panel.font_color}
      slug={panel.slug}
      experts={experts}
      isBattle={panel["is_battle?"]}
    />
  ));
  return list;
};

const MAX_PANEL_CARDS = 2;

const PanelList = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [panels, setPanels] = useState();

  useEffect(() => {
    if (data.length) {
      const loadPanels = async () => {
        const loadedPanels = await Promise.all(data.map(({ id }) => PanelApi.fetchPanelById(id)));
        setPanels(loadedPanels);
      };
      loadPanels();
    }
  }, [data]);

  let list;
  if (data.length) list = <Loader />;
  if (showAll && panels) list = getPanelCardFromArray(panels);
  if (!showAll && panels) list = getPanelCardFromArray(panels.slice(0, MAX_PANEL_CARDS));

  return (
    <>
      <div className={styles["panel-list"]}>{list}</div>
      <div className={styles["button-wrapper"]}>
        <If condition={!showAll && data.length > MAX_PANEL_CARDS}>
          <Button
            onClick={() => setShowAll(true)}
            buttonStyle={ButtonStyle.PRIMARY}
          >
            Alle anzeigen
          </Button>
        </If>
        <If condition={showAll}>
          <Button
            onClick={() => setShowAll(false)}
            buttonStyle={ButtonStyle.PRIMARY}
          >
            Weniger anzeigen
          </Button>
        </If>
      </div>
    </>
  );
};

export default PanelList;
