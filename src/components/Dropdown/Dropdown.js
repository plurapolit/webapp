import React, { useState, useEffect, useRef } from "react";
import { If } from "react-if";

import Dots from "../../assets/images/dots.svg";
import styles from "./Dropdown.module.scss";

const items = [
  "Ich bins Test",
  "Noch einer",
  "Sinnloser Stuff",
  "gib mir Content",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();

  const handleClick = (event) => {
    if (!dropdown.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const toggle = () => { setIsOpen(!isOpen); };

  return (
    <div ref={dropdown}>
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
              <div className={styles["item"]}>
                {item}
              </div>
            ))}
          </div>
        </If>
      </div>
    </div>
  );
};

export default Dropdown;
