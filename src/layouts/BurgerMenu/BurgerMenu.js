import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { kebabCase } from "lodash";

import styles from "./BurgerMenu.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import SignOutButton from "../../components/SignOutButton/SignOutButton";
import Button, { ButtonStyle } from "../../components/Button/Button";
import { useUserContext } from "../../contexts/UserContext/UserContext";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

const SignInButton = () => (
  <Button buttonStyle={ButtonStyle.NONE} to="/sign_in/">
    Anmelden
  </Button>
);

const SignUpButton = () => (
  <Button
    style={{ display: "inline", color: "#ee8137" }}
    buttonStyle={ButtonStyle.NONE}
    to="/sign_up/"
  >
    Registrieren
  </Button>
);

export default function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  const { regionsAndCategories } = useStoreContext();
  const { user } = useUserContext();

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles["burger-menu"]}>
      <Sidebar.Opener onClick={() => setVisible(true)} />
      <Sidebar
        onClose={handleClick}
        visible={visible}
      >
        { user ? (
          <Sidebar.Item>
            <SignOutButton />
          </Sidebar.Item>
        ) : (
          <>
            <Sidebar.Item>
              <SignUpButton />
            </Sidebar.Item>
            <Sidebar.Item>
              <SignInButton />
            </Sidebar.Item>
          </>
        )}
        <Sidebar.Divider />
        {(
          regionsAndCategories && regionsAndCategories.map(({ region, categories }) => (
            <Sidebar.Expandable
              label={region.name}
              key={region.id}
            >
              {categories.map(({ category }) => (
                <HashLink key={category.id} to={`/${kebabCase(region.name)}#${kebabCase(category.name)}`} smooth>
                  <Sidebar.Expandable.Item>
                    {category.name}
                  </Sidebar.Expandable.Item>
                </HashLink>
              ))}
            </Sidebar.Expandable>
          ))
        )}
      </Sidebar>
    </div>
  );
}
