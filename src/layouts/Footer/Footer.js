import React from "react";
import { Link } from "react-router-dom";

import Instagram from "../../assets/images/instagram-icon.svg";
import Facebook from "../../assets/images/facebook-icon.svg";
import Twitter from "../../assets/images/twitter-icon.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <ContentWrapper>
      <div className={styles["container"]}>
        <ul className={styles["legal-links"]}>
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
        <div className={styles["social-icons"]}>
          <a href="https://www.facebook.com/PluraPolit" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} className={styles["icon"]} alt="Facebook" />
          </a>
          <a href="https://twitter.com/plurapolit" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} className={styles["icon"]} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/plurapolit/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className={styles["icon"]} alt="Instagram" />
          </a>
        </div>
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
