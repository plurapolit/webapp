import React from 'react';
import { Link } from 'react-router-dom';

import { isLoaded } from '../../helper/helper';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';

const Welcome = ({ name }) => (
  <p>{`Hello, ${name.first_name}`}</p>
);

const Navbar = ({ user }) => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-container"]}>
        <div>icon</div>
        <li className={styles["navbar-container_item"]}>Thema</li>
        <li className={styles["navbar-container_item"]}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles["navbar-container_item"]}>
          <Link to="terms">Nutzungsbedingungen</Link>
        </li>
        <li>{isLoaded(user, <Welcome name={user} />)}</li>
      </ul>

      <BurgerMenu />

    </nav>
  );
};

export default Navbar;
