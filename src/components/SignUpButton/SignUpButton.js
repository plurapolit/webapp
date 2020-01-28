import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = ({ user, children = 'Registrieren' }) => {
  if (!user) {
    return (
      <Link to={'/sign_up/'}>
        {children}
      </Link>
    );
  }
  return null;
};

export default SignUpButton;
