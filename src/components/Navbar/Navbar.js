import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className="styles.navbar-container">
        <div>icon</div>
        <li className="styles.navbar-container_item">Thema</li>
        <li className="styles.navbar-container_item">Home</li>
        <li className="styles.navbar-container_item">Nutzungsbedingungen</li>
      </ul>


      <div className="styles.menuToggle">
        <input type="styles.checkbox"></input>

          <span></span>
          <span></span>
          <span></span>

        <ul className="styles.menu">
          <a href="#"><li className="styles.navbar-hamburger_item">lol</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
