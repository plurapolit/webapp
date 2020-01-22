import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-container"]}>
        <div>icon</div>
        <li className={styles["navbar-container_item"]}>Thema</li>
        <li className={styles["navbar-container_item"]}>Home</li>
        <li className={styles["navbar-container_item"]}>Nutzungsbedingungen</li>
      </ul>

      <BurgerMenu />

    </nav>
  );
};

export default Navbar;
