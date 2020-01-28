import React from 'react';
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
        <a href="#"><li className={styles["navbar-hamburger_item"]}>lol</li></a>
        <a href="#"><li className={styles["navbar-hamburger_item"]}>lol</li></a>
        <a href="#"><li className={styles["navbar-hamburger_item"]}>lol</li></a>
        <a href="#"><li className={styles["navbar-hamburger_item"]}>lol</li></a>
      </ul>
    </div>
  );
}
export default BurgerMenu;
