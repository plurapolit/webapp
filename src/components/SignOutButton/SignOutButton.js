import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './SignOutButton.module.scss';
import UserApi from '../../api/UserApi';
import JwtApi from '../../api/JwtApi';

const SignOutButton = ({ user, children = 'Abmelden', removeUser }) => {
  const history = useHistory();

  const signOutHandler = () => {
    const jwt = JwtApi.get();
    UserApi.signOut(jwt)
      .then(() => {
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
