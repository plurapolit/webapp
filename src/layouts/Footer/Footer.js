import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <ul className={styles["container"]}>
      <li className={styles["item"]}>
        <Link to="/terms/">Nutzungsbedingungen</Link>
      </li>
      <li className={styles["item"]}>
        <Link to="/privacy-policy/">Datenschutzerklärung</Link>
      </li>
      <li className={styles["item"]}>
        <Link to="/site-notice/">Impressum</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
