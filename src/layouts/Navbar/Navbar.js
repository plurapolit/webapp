import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { kebabCase } from "lodash";

import { useUserContext } from "../../contexts/UserContext/UserContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Navbar.module.scss";
import SignOutButton from "../../components/SignOutButton/SignOutButton";
import Button, { ButtonStyle } from "../../components/Button/Button";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";
import Dropdown from "../../components/Dropdown/Dropdown";

const DropdownHashItem = ({
  children,
  to,
}) => (
  <HashLink to={to} smooth>
    <Dropdown.Item>
      {children}
    </Dropdown.Item>
  </HashLink>
);

const Navbar = () => {
  const { user } = useUserContext();
  const { regionsAndCategories } = useStoreContext();
  const customStyle = {
    nav: styles["navbar"],
    item: styles["item"],
  };

  let buttons = (
    <>
      <li className={customStyle.item}>
        <Button buttonStyle={ButtonStyle.SECONDARY} to="/sign_in/" dataTest="sign_in">
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
          <h1 className={styles["logo-text"]}>PluraPolit</h1>
        </Link>
        <div className={styles["container_items"]}>
          <li className={customStyle.item}>
            <Link to="/2020-wir-uber-uns">Über uns</Link>
          </li>
          {regionsAndCategories && regionsAndCategories.map(({ region, categories }) => (
            <li key={region.id} className={customStyle.item}>
              <Dropdown
                text={region.name}
                icon={null}
              >
                {categories.map(({ category }) => (
                  <DropdownHashItem to={`/${kebabCase(region.name)}#${kebabCase(category.name)}`}>
                    {category.name}
                  </DropdownHashItem>
                ))}
              </Dropdown>
            </li>
          ))}
          {buttons}
        </div>
      </ul>
      <BurgerMenu isTop={false} />
    </nav>
  );
};

export default Navbar;
