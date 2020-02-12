import React from "react";

import styles from "./Text.module.scss";

const Text = ({ headline, children }) => (
  <div className={styles["text"]}>
    <div className={styles["headline"]}>{headline}</div>
    <div>{children}</div>
  </div>
);

export default Text;
