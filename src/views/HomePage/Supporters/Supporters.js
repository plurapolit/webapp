import React from "react";
import LazyLoad from "react-lazyload";
import Img from "react-image";

import styles from "./Supporters.module.scss";
import LPB from "./images/logo-lzpb-hamburg.png";
import StartupIncubator from "./images/2_HWR_Logo.png";
import SIBLogo from "./images/1_SIB_Logo.png";
import Partner1 from "./images/3_be_Berlin_Logo.png";
import Partner2 from "./images/sib-partner2.jpg";
import Partner3 from "./images/5_EU_Sozialfonds_R_Logo.png";

const Supporters = () => (
  <div className={styles["container"]}>
    <LazyLoad offset={200} once>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={StartupIncubator}
          alt="sample-logo"
        />
      </div>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={LPB}
          alt="sample-logo"
        />
      </div>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={Partner1}
          alt="sample-logo"
        />
      </div>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={Partner2}
          alt="sample-logo"
        />
      </div>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={Partner3}
          alt="sample-logo"
        />
      </div>
      <div className={styles["image-wrapper"]}>
        <Img
          className={styles["image"]}
          src={SIBLogo}
          alt="sample-logo"
        />
      </div>
    </LazyLoad>
  </div>
);

export default Supporters;
