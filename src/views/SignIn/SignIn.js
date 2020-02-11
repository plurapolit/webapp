import React from "react";
import { withRouter } from "react-router-dom";

import StoreContext from "../../layouts/Store/StoreContext";
import SignInComponent from "../../components/SignInComponent/SignInComponent";

import styles from "./SignIn.module.scss";

const SignIn = ({ history }) => {
  const routeBack = () => {
    history.push("/");
  };

  return (
    <StoreContext.Consumer>
      {(data) => (
        <div className={styles["container"]}>
          <SignInComponent setUser={data.setUser} routeBack={routeBack} />
        </div>
      )}
    </StoreContext.Consumer>
  );
};

export default withRouter(SignIn);
