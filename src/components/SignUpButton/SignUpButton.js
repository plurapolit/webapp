import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = ({ user }) => {
  console.log('user ', user);
  if (!user) {
    return (
      <Link to={'/sign_up/'}>
        Registrieren
      </Link>
    );
  }
  return null;
};

export default SignUpButton;
