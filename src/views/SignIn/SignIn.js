import React from "react";
import { withRouter } from "react-router-dom";

import SignInComponent from "../../components/SignInComponent/SignInComponent";

import styles from "./SignIn.module.scss";

const SignIn = ({ history }) => {
  const routeBack = () => {
    history.push("/");
  };

  return (
    <div className={styles["container"]}>
      <SignInComponent routeBack={routeBack} />
    </div>
  );
};

export default withRouter(SignIn);
