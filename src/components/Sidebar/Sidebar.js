import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import styles from "./Sidebar.module.scss";
import { ReactComponent as CloseImg } from "../../assets/images/close.svg";
import { ReactComponent as BurgerMenuImg } from "../../assets/images/open-menu.svg";
import { ReactComponent as ArrowImg } from "../../assets/images/arrow.svg";


const Expandable = ({
  label,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);

  return (
    <div className={styles["expandable"]}>
      <div className={styles["expandable_label"]} onClick={handleClick}>
        {label}
        <ArrowImg className={expanded ? styles["arrow--down"] : styles["arrow"]} />
      </div>
      <SlideDown>
        {expanded && (
          <div className={styles["expandable_wrapper"]}>
            { children }
          </div>
        )}
      </SlideDown>
    </div>
  );
};

const ExpandableItem = ({
  children,
  onClick = () => {},
}) => (
  <div className={styles["expandable_item"]} onClick={onClick}>
    { children }
  </div>
);

Expandable.Item = ExpandableItem;

const Divider = () => (
  <div className={styles["divider"]} />
);

const Opener = ({
  onClick,
}) => (
  <BurgerMenuImg className={styles["opener"]} onClick={onClick} />
);

const Item = ({
  children,
  onClick = () => { },
}) => (
  <div className={styles["item"]} onClick={onClick}>
    {children}
  </div>
);

const Sidebar = ({
  children,
  onClose,
  visible,
}) => (visible && (
  <>
    <div className={styles["overlay"]} onClick={onClose} />
    <div className={styles["sidebar"]}>
      <CloseImg className={styles["close-img"]} onClick={onClose} />
      {children}
    </div>
  </>
));

Sidebar.Item = Item;
Sidebar.Opener = Opener;
Sidebar.Divider = Divider;
Sidebar.Expandable = Expandable;

export default Sidebar;
