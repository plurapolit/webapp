import React from "react";
import styles from "./ContentWrapper.module.scss";

const ContentWrapper = (props) => {
  const { children } = props;
  return (
    <div className={styles["wrapper"]}>
      {children}
    </div>
  );
};

export default ContentWrapper;
