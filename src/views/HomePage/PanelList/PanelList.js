/* eslint-disable camelcase */
import React, { useState } from "react";
import { If } from "react-if";
import Button, { ButtonStyle } from "../../../components/Button/Button";

import styles from "./PanelList.module.scss";
import PanelCard from "../PanelCard/PanelCard";

const getPanelCardFromArray = (array) => {
  const list = array.map(({ panel, experts, panel_avatar }) => (
    <PanelCard
      key={panel.id}
      title={panel.title}
      shortTitle={panel.short_title}
      imageUrl={panel_avatar}
      color={panel.font_color}
      slug={panel.slug}
      experts={experts}
    />
  ));
  return list;
};

const MAX_PANELCARDS = 2;

const PanelList = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  let list;
  if (showAll) list = getPanelCardFromArray(data);
  if (!showAll) list = getPanelCardFromArray(data.slice(0, MAX_PANELCARDS));

  return (
    <>
      <div className={styles["panel-list"]}>{list}</div>
      <div className={styles["button-wrapper"]}>
        <If condition={!showAll && data.length > MAX_PANELCARDS}>
          <Button
            onClick={() => setShowAll(true)}
            buttonStyle={ButtonStyle.COMMENT}
          >
            alle Anzeigen
          </Button>
        </If>
        <If condition={showAll}>
          <Button
            onClick={() => setShowAll(false)}
            buttonStyle={ButtonStyle.COMMENT}
          >
            weniger Anzeigen
          </Button>
        </If>
      </div>
    </>
  );
};

export default PanelList;
