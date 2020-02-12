import React from "react";
import { Link } from "react-router-dom";

import LogoBlack from "./images/PluraPolitLogoblack.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";
import SignUpButton from "../SignUpButton/SignUpButton";
import SignOutButton from "../SignOutButton/SignOutButton";
import StoreContext from "../../layouts/Store/StoreContext";

const Navbar = ({ user }) => {
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
    logo: LogoBlack,
  };

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
          <li className={customStyle.item}>
            <SignUpButton user={user} />
          </li>
          <StoreContext.Consumer>
            {(data) => (
              <li className={customStyle.item}>
                <SignOutButton user={user} removeUser={data.removeUser} />
              </li>
            )}
          </StoreContext.Consumer>
        </div>
      </ul>
      <BurgerMenu isTop={false} user={user} />
    </nav>
  );
};

export default Navbar;
