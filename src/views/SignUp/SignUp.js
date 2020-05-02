import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import styles from "./SignUp.module.scss";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";

const SignUp = () => {
  const history = useHistory();

  const onSignIn = () => history.push("/sign_in/");
  const routeBack = () => history.push("/");

  return (
    <div className={styles["container"]}>
      <SignUpComponent
        routeBack={routeBack}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default withRouter(SignUp);
