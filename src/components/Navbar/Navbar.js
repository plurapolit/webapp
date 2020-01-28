import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';
import SignInButton from '../SignInButton/SignInButton';
import SignUpButton from '../SignUpButton/SignUpButton';

const Navbar = ({ user }) => {
  const refNavbar = useRef(undefined);

  const setBackgroundColor = (color) => {
    refNavbar.current.style.setProperty('--bgcolor', color);
  };

  const handleScroll = (event) => {
    const scrollTop = event.currentTarget.scrollY;
    if (scrollTop > 50) {
      setBackgroundColor('#cccccc');
    }
    if (scrollTop <= 50) {
      setBackgroundColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={refNavbar} className={styles["navbar"]}>
      <ul className={styles["navbar-container"]}>
        <div>icon</div>
        <li className={styles["navbar-container_item"]}>Thema</li>
        <li className={styles["navbar-container_item"]}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles["navbar-container_item"]}>
          <Link to="terms">Nutzungsbedingungen</Link>
        </li>
        <li><SignInButton user={user} /></li>
        <li><SignUpButton user={user} /></li>
      </ul>

      <BurgerMenu />

    </nav>
  );
};

export default Navbar;
