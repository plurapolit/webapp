import React from "react";

import styles from "./H1.module.scss";


export default function H1({ children }) {
  return (
    <h1 className={styles["h1"]}>{children}</h1>
  );
}