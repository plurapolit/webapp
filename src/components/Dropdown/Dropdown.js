import React, { useState, useEffect, useRef } from "react";
import { If } from "react-if";

import Dots from "../../assets/images/dots.svg";
import styles from "./Dropdown.module.scss";

const createDots = () => (
  <img
    src={Dots}
    alt="3 Punkte"
    className={styles["icon"]}
  />
);

const Dropdown = ({
  items,
  style,
  children,
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

  const toggle = () => { setIsOpen(!isOpen); };
  const dotImage = createDots();

  return (
    <div ref={dropdown} style={style}>
      <div className={`${styles["dropdown"]} ${(isOpen) ? styles["active"] : ""}`}>
        <div onClick={toggle}>
          {children || dotImage}
        </div>
        <If condition={isOpen}>
          <div className={styles["item-container"]}>
            {items.map((item) => (
              <div key={item.text} className={styles["item"]} onClick={item.onClick}>
                {item.icon
                  && <item.icon className={styles["item-icon"]} />}
                {item.text}
              </div>
            ))}
          </div>
        </If>
      </div>
    </div>
  );
};

export default Dropdown;
