import React from 'react';
import Button from '../Button/Button';

const SignUpButton = ({ user, children = 'Registrieren' }) => {
  if (!user) {
    return (
      <Button to="/sign_up/">
        {children}
      </Button>
    );
  }
  return null;
};

export default SignUpButton;
