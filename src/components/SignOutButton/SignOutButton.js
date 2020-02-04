import React from 'react';

import styles from './SignOutButton.module.scss';
import UserApi from '../../api/UserApi';
import JwtApi from '../../api/JwtApi';

const SignOutButton = ({ user, children = 'Abmelden', removeUser }) => {
  const signOutHandler = () => {
    const jwt = JwtApi.get();
    UserApi.signOut(jwt)
      .then(() => {
        removeUser();
        JwtApi.delete();
      });
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
