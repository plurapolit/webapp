import React from "react";

import styles from "./StyleButton.module.scss";

const StyleButton = ({
  style,
  onToggle,
  label,
  active,
}) => {
  const onToggleStyle = (event) => {
    event.preventDefault();
    onToggle(style);
  };

  let className = "button";

  if (active) className = "button--active";

  return (
    <span
      className={styles[className]}
      onMouseDown={onToggleStyle}
    >
      {label}
    </span>
  );
};

export default StyleButton;
