import React, { useState } from "react";

import SignInComponent from "../../../components/SignInComponent/SignInComponent";
import SignUpComponent from "../../../components/SignUpComponent/SignUpComponent";
import RequestNewPasswordComponent from "../../../components/RequestNewPasswordComponent/RequestNewPasswordComponent";

const SignInWrapper = ({
  closeModal,
}) => {
  const [page, setPage] = useState("SIGN_IN");

  const onSignIn = () => setPage("SIGN_IN");
  const onSignUp = () => setPage("SIGN_UP");
  const onRequestNewPassword = () => setPage("REQUEST_NEW_PASSWORD");

  switch (page) {
    case "SIGN_IN":
      return (
        <SignInComponent
          routeBack={closeModal}
          onSignUp={onSignUp}
          onRequestNewPassword={onRequestNewPassword}
        />
      );
    case "SIGN_UP":
      return (
        <SignUpComponent
          routeBack={closeModal}
          onSignIn={onSignIn}
        />
      );
    case "REQUEST_NEW_PASSWORD":
      return (
        <RequestNewPasswordComponent
          routeBack={onSignIn}
          onSignIn={onSignIn}
        />
      );
    default:
      return (
        <SignInComponent
          routeBack={closeModal}
          onSignUp={onSignUp}
          onRequestNewPassword={onRequestNewPassword}
        />
      );
  }
};

export default SignInWrapper;
