import React from "react";
import { Link } from "react-router-dom";

import styles from "./SignInComponent.module.scss";
import Button from "../Button/Button";
import UserApi from "../../api/UserApi";
import { getDataFromEvent } from "../../helper/helper";
import Notification from "../../helper/Notification";
import JwtApi from "../../api/JwtApi";

const SignInComponent = ({ setUser, routeBack = () => {} }) => {
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
          <Link to="/sign_up/">Registrieren</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
