import React from 'react';
import UserApi from '../../api/UserApi';

const SignOutButton = ({ user, children = 'Abmelden', removeUser, removeJwt, jwt }) => {
  const signOutHandler = async () => {
    UserApi.signOut(jwt)
      .then(() => {
        removeUser();
        removeJwt();
      })
      .catch((error) => {
        console.log('error ', error);
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
