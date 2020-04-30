import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./RequestNewPassword.module.scss";
import RequestNewPasswordComponent from "../../components/RequestNewPasswordComponent/RequestNewPasswordComponent";

const RequestNewPassword = () => {
  const history = useHistory();

  const routeBack = () => history.push("/");
  const onSignIn = () => history.push("/sign_in/");

  return (
    <div className={styles["container"]}>
      <RequestNewPasswordComponent
        routeBack={routeBack}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default RequestNewPassword;
