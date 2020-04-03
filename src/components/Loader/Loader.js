import React from "react";
import { ClipLoader } from "react-spinners";

import styles from "./Loader.module.scss";

const Loader = ({
  size = 110,
  borderWidth = "1rem",
  color = "#123ABC",
}) => (
  <div className={styles["container"]}>
    <ClipLoader size={size} css={{ borderWidth }} color={color} loading />
  </div>
);

export default Loader;
