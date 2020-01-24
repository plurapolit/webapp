import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navbar__container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/topics/">Topics</NavLink>
    </div>
  );
};

export default NavBar;
