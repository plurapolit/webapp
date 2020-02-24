import React from "react";
import { Link } from "react-router-dom";

import styles from "./SignInComponent.module.scss";
import Button from "../Button/Button";
import UserApi from "../../api/UserApi";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import JwtApi from "../../api/JwtApi";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

const SignInComponent = ({
  routeBack = () => {},
  onLinkClick = () => {},
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
        <h1>Anmeldung</h1>
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
          <Link to="/sign_up/" onClick={onLinkClick}>Registrieren</Link>
        </div>
        <div className={styles["text"]}>
          <span>Passwort vergessen? </span>
          <Link to="/request_new_password/" onClick={onLinkClick}>Neues Passwort</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
