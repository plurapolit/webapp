import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../contexts/StoreContext/StoreContext";
import styles from "./SignOutButton.module.scss";
import UserApi from "../../api/UserApi";
import JwtApi from "../../api/JwtApi";

const SignOutButton = ({ children = "Abmelden" }) => {
  const history = useHistory();
  const { user, removeUser } = useContext(StoreContext);

  const signOutHandler = () => {
    const jwt = JwtApi.get();
    UserApi.signOut(jwt).then(() => {
      removeUser();
      JwtApi.delete();
    });
    history.push("/");
  };

  if (user) {
    return (
      <div className={styles["pointer"]} onClick={() => signOutHandler()}>
        {children}
      </div>
    );
  }
  return null;
};

export default SignOutButton;
