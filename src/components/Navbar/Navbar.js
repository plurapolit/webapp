import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from './images/PluraPolitLogowhite.png';
import LogoBlack from './images/PluraPolitLogoblack.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';
import SignUpButton from '../SignUpButton/SignUpButton';
import SignOutButton from '../SignOutButton/SignOutButton';
import StoreContext from '../../layouts/Store/StoreContext';

const Navbar = ({ user }) => {
  const [isAtTop, setIsAtTop] = useState(false);
  let customStyle;

  const handleScroll = (event) => {
    const scrollTop = event.currentTarget.scrollY;
    if (scrollTop > 100) {
      setIsAtTop(false);
    }
    if (scrollTop <= 100) {
      setIsAtTop(true);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  if (isAtTop) {
    customStyle = {
      nav: styles["navbar_top"],
      item: styles["item_top"],
      logo: LogoWhite,
    };
  } else {
    customStyle = {
      nav: styles["navbar"],
      item: styles["item"],
      logo: LogoBlack,
    };
  }

  return (
    <nav className={customStyle.nav}>
      <ul className={styles["container"]}>
        <Link to="/">
          <img src={customStyle.logo} className={styles["logo"]} alt="Logo"></img>
        </Link>
        <div className={styles["container_items"]}>
          <li className={customStyle.item}>
            <Link to="terms">Nutzungsbedingungen</Link>
          </li>
          <li className={customStyle.item}>
            <SignUpButton user={user} />
          </li>
          <StoreContext.Consumer>
            {(data) => (
              <li className={customStyle.item}>
                <SignOutButton
                  user={user}
                  removeUser={data.removeUser}
                />
              </li>
            )}
          </StoreContext.Consumer>
        </div>
      </ul>
      <BurgerMenu isTop={isAtTop} />
    </nav>
  );
};

export default Navbar;
