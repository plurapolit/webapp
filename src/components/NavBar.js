import React from 'react';
import { css } from 'glamor';

const styles = {
  navbarWrapper: css({
    border: "2px solid red",
    height: 200,
  })
};

const NavBar = () => {
  return (
    <div {...styles.navbarWrapper}>
      Navbar
    </div>
  );
};

export default NavBar;
