import React from "react";
import { useHistory } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext/UserContext";
import styles from "./SignOutButton.module.scss";
import UserApi from "../../api/UserApi";
import JwtApi from "../../api/JwtApi";

const SignOutButton = ({ children = "Abmelden" }) => {
  const history = useHistory();
  const { user, removeUser } = useUserContext();

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
      <div className={styles["pointer"]} onClick={() => signOutHandler()} data-test="sign-out">
        {children}
      </div>
    );
  }
  return null;
};

export default SignOutButton;
