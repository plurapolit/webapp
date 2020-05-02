import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import SignInComponent from "../../components/SignInComponent/SignInComponent";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const history = useHistory();

  const routeBack = () => history.push("/");
  const onSignUp = () => history.push("/sign_up/");
  const onRequestNewPassword = () => history.push("/request_new_password/");


  return (
    <div className={styles["container"]}>
      <SignInComponent
        routeBack={routeBack}
        onSignUp={onSignUp}
        onRequestNewPassword={onRequestNewPassword}
      />
    </div>
  );
};

export default withRouter(SignIn);
