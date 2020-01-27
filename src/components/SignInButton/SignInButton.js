import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ user }) => (
  <p>{`Hello, ${user.first_name}`}</p>
);

const SignInButton = ({ user }) => {
  if (user) {
    return <Welcome user={user} />;
  }
  return (
    <Link to="/sign_in/">Anmelden</Link>
  );
};

export default SignInButton;
