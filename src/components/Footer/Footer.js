import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles["footer"]}>
    <ul className={styles["container"]}>
      <li className={styles["item"]}>Datenschutzerklärung</li>
      <li className={styles["item"]}>Impressum</li>
      <li className={styles["item"]}>Nutzungsbedingungen</li>
    </ul>
  </footer>
);

export default Footer;
