import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { isLoaded } from '../../helper/helper';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';

const Welcome = ({ name }) => (
  <p>{`Hello, ${name.first_name}`}</p>
);

const Navbar = ({ user, signIn }) => {
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
        <li>{isLoaded(user, <Welcome name={user} />)}</li>
      </ul>
      {user ? null : <button onClick={() => signIn()}>sign in</button>}

      <BurgerMenu />

    </nav>
  );
};

export default Navbar;
