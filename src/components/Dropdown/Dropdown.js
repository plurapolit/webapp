import React, { useState, useEffect, useRef } from "react";

import Dots from "../../assets/images/dots.svg";
import styles from "./Dropdown.module.scss";

const Item = ({
  children,
  onClick = () => {},

}) => (
  <div className={styles["item"]} onClick={onClick}>
    {children}
  </div>
);

const DefaultIcon = () => (
  <div className={styles["icon"]}>
    <img
      src={Dots}
      alt="3 Punkte"
      height="100%"
      width="100%"
    />
  </div>
);

const Dropdown = ({
  children,
  style,
  text,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();

  const handleOutsideClick = (event) => {
    if (!dropdown.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdown} style={style}>
      <div className={styles["dropdown"]}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles["dropdown_label"]}
        >
          { text }
          { icon === undefined && <DefaultIcon />}
        </div>
        { isOpen && (
          <div className={styles["item-container"]}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
Dropdown.Item = Item;

export default Dropdown;
