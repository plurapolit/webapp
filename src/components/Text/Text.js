import React from "react";
import { If } from "react-if";

import styles from "./Text.module.scss";

const Text = ({ headline, children }) => (
  <div className={styles["text"]}>
    <If condition={headline}>
      <div className={styles["headline"]}>{headline}</div>
    </If>
    <div>{children}</div>
  </div>
);

export default Text;
