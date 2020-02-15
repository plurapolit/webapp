import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

export const ButtonStyle = {
  CTA: "cta",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  NONE: "none",
  COMMENT: "comment",
};

const Button = ({
  children,
  style = null,
  buttonStyle = ButtonStyle.PRIMARY,
  type = "button",
  to = undefined,
  onClick = () => {},
}) => {
  const getButtonStyle = () => {
    switch (buttonStyle) {
      case ButtonStyle.CTA:
        return "button--cta";
      case ButtonStyle.PRIMARY:
        return "button--primary";
      case ButtonStyle.SECONDARY:
        return "button--secondary";
      case ButtonStyle.NONE:
        return null;
      case ButtonStyle.COMMENT:
        return "button--comment";
      default:
        return "button--primary";
    }
  };

  /* eslint-disable react/button-has-type */
  const button = (
    <button
      type={type}
      className={styles[`${getButtonStyle()}`]}
      style={style}
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
