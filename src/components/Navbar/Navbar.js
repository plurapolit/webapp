import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <div>icon</div>
        <li className="navbar-container_item">Thema</li>
        <li className="navbar-container_item">Home</li>
        <li className="navbar-container_item">Nutzungsbedingungen</li>
      </ul>


      <div className="menuToggle">
        <input type="checkbox"></input>

          <span></span>
          <span></span>
          <span></span>

        <ul className="menu">
          <a href="#"><li className="navbar-hamburger_item">lol</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
