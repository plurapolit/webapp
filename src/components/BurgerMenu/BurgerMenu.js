import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';


const BurgerMenu = ({ isTop }) => {

  const topStyle = {
    '--burgerColor': '#fff',
  }

  const standardStyle = {
    '--burgerColor': '#282828',
  }
  
  return (
    <div className={styles["menuToggle"]} style={isTop ? topStyle : standardStyle}>
      <input type="checkbox"></input>

        <span></span>
        <span></span>
        <span></span>

      <ul className={styles["menu"]}>
        <li className={styles["navbar-hamburger_item"]}>
          <Link to="/sign_up/">
            Registieren
          </Link>
        </li>
        <li className={styles["navbar-hamburger_item"]}>
          <Link to="/sign_in/">
            Anmelden
          </Link>
        </li>
        <li className={styles["navbar-hamburger_item"]}>
          <Link to="/terms/">
            Nutzungsbedingungen
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default BurgerMenu;
