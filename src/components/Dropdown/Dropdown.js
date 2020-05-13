import React, { useState, useEffect, useRef } from "react";
import { If } from "react-if";

import Dots from "../../assets/images/dots.svg";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ items, style }) => {
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

  return (
    <div ref={dropdown} style={style}>
      <div className={`${styles["dropdown"]} ${(isOpen) ? styles["active"] : ""}`}>
        <img
          src={Dots}
          alt="3 Punkte"
          className={styles["icon"]}
          onClick={toggle}
        />
        <If condition={isOpen}>
          <div className={styles["item-container"]}>
            {items.map((item) => (
              <div key={item.text} className={styles["item"]} onClick={item.onClick}>
                <item.icon className={styles["item-icon"]} />
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
