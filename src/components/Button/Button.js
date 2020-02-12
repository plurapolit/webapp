import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

// TODO: add button types button primary ...

const Button = ({
  children,
  cta,
  customClass = null,
  type = "button",
  to = undefined,
  onClick = () => {},
}) => {
  const customStyle = {
    "--bg-color": cta ? "#EE8137" : "#4E0CED",
  };

  /* eslint-disable react/button-has-type */
  const button = (
    <button
      type={type}
      className={`${styles["button"]} ${customClass}`}
      style={customStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */

  if (to) {
    return <Link to={to}>{button}</Link>;
  }
  return button;
};

export default Button;
