import React from "react";
import { ClipLoader } from "react-spinners";

import styles from "./Loader.module.scss";

const Loader = () => (
  <div className={styles["container"]}>
    <ClipLoader size={110} css={{ borderWidth: "1rem" }} color="#123abc" loading />
  </div>
);

export default Loader;
