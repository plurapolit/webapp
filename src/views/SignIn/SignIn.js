import React from "react";
import { withRouter } from "react-router-dom";

import { StoreConsumer } from "../../layouts/Store/StoreContext";
import SignInComponent from "../../components/SignInComponent/SignInComponent";

import styles from "./SignIn.module.scss";

const SignIn = ({ history }) => {
  const routeBack = () => {
    history.push("/");
  };

  return (
    <StoreConsumer>
      {(data) => (
        <div className={styles["container"]}>
          <SignInComponent setUser={data.setUser} routeBack={routeBack} />
        </div>
      )}
    </StoreConsumer>
  );
};

export default withRouter(SignIn);
