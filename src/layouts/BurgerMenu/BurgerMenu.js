import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../../components/SignOutButton/SignOutButton";
import Button, { ButtonStyle } from "../../components/Button/Button";
import { StoreContext } from "../../contexts/StoreContext/StoreContext";

import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const { user } = useContext(StoreContext);

  const handleClick = () => {
    setShow(!show);
  };

  const sliderClass = `${styles["slider"]} ${
    show ? styles["slider_active"] : null
  }`;

  let buttons = (
    <>
      <li className={styles["item"]}>
        <Button onClick={handleClick} buttonStyle={ButtonStyle.NONE} to="/sign_in/">Anmelden</Button>
      </li>
      <li className={styles["item"]}>
        <Button
          onClick={handleClick}
          style={{ display: "inline" }}
          buttonStyle={ButtonStyle.CTA}
          to="/sign_up/"
        >
          Registrieren
        </Button>
      </li>
    </>
  );

  if (user) {
    buttons = (
      <div tabIndex="0" role="link" onClick={() => handleClick()} className={styles["item"]}>
        <SignOutButton />
      </div>
    );
  }

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
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className={styles["item"]} onClick={handleClick}>
            <Link to="/2020-wir-uber-uns">Über uns</Link>
          </li>
          <li className={styles["item"]} onClick={handleClick}>
            <Link to="/terms/">Nutzungsbedingungen</Link>
          </li>
          {buttons}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
