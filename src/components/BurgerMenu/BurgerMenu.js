import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';


const BurgerMenu = ({ isTop }) => {
  const [show, setShow] = useState(false);


  const handleClick = () => {
    setShow(!show);
  };

  const topStyle = {
    '--burgerColor': '#fff',
  };

  const standardStyle = {
    '--burgerColor': '#282828',
  };

  const sliderClass = `${styles["slider"]} ${show ? styles["slider_active"] : null}`;


  return (
    <div>
      <div className={show ? styles["overlay"] : null} onClick={handleClick} />
      <div className={styles["burger"]} onClick={handleClick}>
        <span className={styles["burger_item"]} />
        <span className={styles["burger_item"]} />
        <span className={styles["burger_item"]} />
      </div>

      <div className={sliderClass}>
        <div className={styles["x_wrapper"]} onClick={handleClick}>
          <span className={styles["x_1"]} />
          <span className={styles["x_2"]} />
        </div>
        <ul className={styles["list"]}>
          <li className={styles["item"]}>
            <Link to="/sign_up/" onClick={handleClick}>
              Registieren
            </Link>
          </li>
          <li className={styles["item"]} onClick={handleClick}>
            <Link to="/sign_in/">
              Anmelden
            </Link>
          </li>
          <li className={styles["item"]} onClick={handleClick}>
            <Link to="/terms/">
              Nutzungsbedingungen
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
