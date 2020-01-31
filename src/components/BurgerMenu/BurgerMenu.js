import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';


const BurgerMenu = ({ isTop }) => {
  const [show, setShow] = useState(false);


  const handleClick = () => {
    setShow(!show);
  }

  const topStyle = {
    '--burgerColor': '#fff',
  }

  const standardStyle = {
    '--burgerColor': '#282828',
  }
  
  return (
    <div className={styles["slider"]}>
      <div onClick={handleClick}>
        <span className={styles["x_1"]}/>
        <span className={styles["x_2"]}/>
      </div>
      <ul className={styles["list"]}>
         <li className={styles["item"]}>
           <Link to="/sign_up/">
             Registieren
           </Link>
         </li>
         <li className={styles["item"]}>
           <Link to="/sign_in/">
             Anmelden
           </Link>
         </li>
         <li className={styles["item"]}>
           <Link to="/terms/">
             Nutzungsbedingungen
           </Link>
         </li>
       </ul>
    </div>
  );


  // return (
  //   <div className={styles["menuToggle"]} style={isTop ? topStyle : standardStyle}>
  //     <input type="checkbox"></input>

  //       <span></span>
  //       <span></span>
  //       <span></span>

  //     <ul className={styles["menu"]}>
  //       <li className={styles["navbar-hamburger_item"]}>
  //         <Link to="/sign_up/">
  //           Registieren
  //         </Link>
  //       </li>
  //       <li className={styles["navbar-hamburger_item"]}>
  //         <Link to="/sign_in/">
  //           Anmelden
  //         </Link>
  //       </li>
  //       <li className={styles["navbar-hamburger_item"]}>
  //         <Link to="/terms/">
  //           Nutzungsbedingungen
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // );
}
export default BurgerMenu;
