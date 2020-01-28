import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from './images/PluraPolitLogowhite.png';
import LogoBlack from './images/PluraPolitLogoblack.png';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';
import SignInButton from '../SignInButton/SignInButton';

const Navbar = ({ user }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = (event) => {
    const scrollTop = event.currentTarget.scrollY;
    if (scrollTop > 100) {
      setIsAtTop(false);
    }
    if (scrollTop <= 100) {
      setIsAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isAtTop ? styles["navbar_top"] : styles["navbar"]}>
      <ul className={styles["container"]}>
        <img src={isAtTop ? LogoWhite : LogoBlack} className={styles["logo"]} alt="Logo"></img>
        <li className={isAtTop ? styles["item_top"] : styles["item"]}>
          Thema
        </li>
        <li className={isAtTop ? styles["item_top"] : styles["item"]}>
          <Link to="/">Home</Link>
        </li>
        <li className={isAtTop ? styles["item_top"] : styles["item"]}>
          <Link to="terms">Nutzungsbedingungen</Link>
        </li>
        <li className={isAtTop ? styles["item_top"] : styles["item"]}>
          <SignInButton user={user} />
        </li>
      </ul>
      <BurgerMenu isTop={isAtTop} />
    </nav>
  );
};

export default Navbar;
