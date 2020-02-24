import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import LogoBlack from "./images/PluraPolitLogoblack.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";
import SignOutButton from "../../components/SignOutButton/SignOutButton";
import Button, { ButtonStyle } from "../../components/Button/Button";

const Navbar = () => {
  const { user } = useStoreContext();
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
    logo: LogoBlack,
  };

  let buttons = (
    <>
      <li className={customStyle.item}>
        <Button buttonStyle={ButtonStyle.SECONDARY} to="/sign_in/">
          Anmelden
        </Button>
      </li>
      <li className={customStyle.item}>
        <Button buttonStyle={ButtonStyle.CTA} to="/sign_up/">
          Registrieren
        </Button>
      </li>
    </>
  );

  if (user) {
    buttons = (
      <li className={customStyle.item}>
        <SignOutButton />
      </li>
    );
  }

  return (
    <nav className={customStyle.nav}>
      <ul className={styles["container"]}>
        <Link to="/">
          <img src={customStyle.logo} className={styles["logo"]} alt="Logo" />
        </Link>
        <div className={styles["container_items"]}>
          <li className={customStyle.item}>
            <Link to="/2020-wir-uber-uns">Über uns</Link>
          </li>
          <li className={customStyle.item}>
            <Link to="/terms/">Nutzungsbedingungen</Link>
          </li>
          {buttons}
        </div>
      </ul>
      <BurgerMenu isTop={false} />
    </nav>
  );
};

export default Navbar;
