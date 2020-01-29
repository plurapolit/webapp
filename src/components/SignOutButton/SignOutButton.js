import React from 'react';

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
      <button type="button" onClick={() => signOutHandler()}>
        {children}
      </button>
    );
  }
  return null;
};

export default SignOutButton;
