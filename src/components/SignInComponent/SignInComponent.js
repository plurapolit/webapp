import React from "react";

import styles from "./SignInComponent.module.scss";
import Button from "../Button/Button";
import H1 from "../H1/H1";
import UserApi from "../../api/UserApi";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import JwtApi from "../../api/JwtApi";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

const SignInComponent = ({
  routeBack = () => {},
  onSignUp = () => {},
  onRequestNewPassword = () => {},
}) => {
  const { setUser } = useStoreContext();

  const handleSubmit = async (event) => {
    const inputData = getDataFromEvent(event);
    try {
      const data = await UserApi.signIn(inputData.email, inputData.password);
      setUser(data.user);
      JwtApi.set(data.token);
      routeBack();
      Notification.signedIn(data.user.first_name, data.user.last_name);
    } catch (obj) {
      Notification.warning(obj.error);
    }
  };

  return (
    <div className={styles["sign_in"]}>
      <div className={styles["container"]}>
        <H1>Anmeldung</H1>
        <form
          className={styles["form"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type="email" name="email" placeholder="E-Mail" required />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
          />
          <Button type="submit">Anmelden</Button>
        </form>
        <div className={styles["text"]}>
          <span>Du besitzt keinen Account? </span>
          <div onClick={onSignUp}>Registrieren</div>
        </div>
        <div className={styles["text"]}>
          <span>Passwort vergessen? </span>
          <div onClick={onRequestNewPassword}>Neues Passwort</div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
