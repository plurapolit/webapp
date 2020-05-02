import React from "react";
import styles from "./NavbarBuffer.module.scss";

const NavbarBuffer = ({ children }) => (
  <div className={styles["buffer"]}>{children}</div>
);

export default NavbarBuffer;
