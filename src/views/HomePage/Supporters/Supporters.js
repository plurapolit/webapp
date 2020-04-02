import React from "react";

import styles from "./Supporters.module.scss";
import LPB from "./images/logo-lzpb-hamburg.png";
import StartupIncubator from "./images/2_HWR_Logo.png";
import SIBLogo from "./images/1_SIB_Logo.png";
import Partner1 from "./images/3_be_Berlin_Logo.png";
import Partner2 from "./images/sib-partner2.jpg";
import Partner3 from "./images/5_EU_Sozialfonds_R_Logo.png";

const Supporters = () => (
  <div className={styles["container"]}>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={LPB} alt="sample-logo" />
    </div>
    <a href="https://www.startup-incubator.berlin/">
      <div className={styles["image-wrapper"]}>
        <img className={styles["image"]} src={SIBLogo} alt="sample-logo" />
      </div>
    </a>
    <a href="http://www.hwr-berlin.de/">
      <div className={styles["image-wrapper"]}>
        <img className={styles["image"]} src={StartupIncubator} alt="sample-logo" />
      </div>
    </a>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner1} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner2} alt="sample-logo" />
    </div>
    <div className={styles["image-wrapper"]}>
      <img className={styles["image"]} src={Partner3} alt="sample-logo" />
    </div>
  </div>
);

export default Supporters;
