import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpButton from '../SignUpButton/SignUpButton';
import SignOutButton from '../SignOutButton/SignOutButton';

import StoreContext from '../../layouts/Store/StoreContext';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isTop, user }) => {
  const [show, setShow] = useState(false);


  const handleClick = () => {
    setShow(!show);
  };

  const topStyle = {
    '--burgerColor': '#fff',
  };

  const standardStyle = {
    '--burgerColor': '#282828',
  };

  const sliderClass = `${styles["slider"]} ${show ? styles["slider_active"] : null}`;

  const getActions = (user) => {
    if (user) {
      return (
        <StoreContext.Consumer>
          {(data) => (
            <li onClick={() => handleClick()} className={styles["item"]}>
              <SignOutButton
                user={user}
                removeUser={data.removeUser}
              />
            </li>
          )}
        </StoreContext.Consumer>
      );
    }
    return (
      <>
        <li className={styles["item"]} onClick={handleClick}>
          <Link to="/sign_in/">
            Anmelden
          </Link>
        </li>
        <li onClick={() => handleClick()} className={styles["item"]}>
          <SignUpButton user={user} />
        </li>
      </>
    );
  };


  return (
    <div>
      <div className={show ? styles["overlay"] : null} onClick={handleClick} />
      <div className={styles["burger"]} onClick={handleClick}>
        <span className={styles["burger_item"]} />
        <span className={styles["burger_item"]} />
        <span className={styles["burger_item"]} />
      </div>

      <div className={sliderClass}>
        <div className={styles["x_wrapper"]} onClick={handleClick}>
          <span className={styles["x_1"]} />
          <span className={styles["x_2"]} />
        </div>
        <ul className={styles["list"]}>
          <li className={styles["item"]}>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className={styles["item"]} onClick={handleClick}>
            <Link to="/terms/">
              Nutzungsbedingungen
            </Link>
          </li>
          {getActions(user)}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
