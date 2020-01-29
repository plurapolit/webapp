import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link onClick={() => signOutHandler()}>
        {children}
      </Link>
    );
  }
  return null;
};

export default SignOutButton;
