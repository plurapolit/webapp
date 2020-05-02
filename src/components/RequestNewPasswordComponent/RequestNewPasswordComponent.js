import React from "react";

import styles from "./RequestNewPasswordComponent.module.scss";
import Button from "../Button/Button";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import UserApi from "../../api/UserApi";

const FIVE_SECONDS = 5000;

const RequestNewPasswordComponent = ({
  routeBack = () => {},
  onSignIn = () => {},
}) => {
  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const res = await UserApi.requestNewPassword(input.email);
      if (res.status !== 201) {
        const json = await res.json();
        return Notification.setErrorMessages(json.errors);
      }
      setTimeout(() => {
        routeBack();
      }, FIVE_SECONDS);
      return Notification.success("Schau in deinem E-Mail Postfach nach", "Passwort Änderung erfolgreich angefordert");
    } catch (obj) {
      return Notification.setErrorMessages(obj.errors);
    }
  };

  return (
    <div className={styles["request-new-password"]}>
      <div className={styles["container"]}>
        <h1>Passwort ändern</h1>
        <p className={styles["instructions"]}>
          Wir senden dir eine E-Mail mit einem Link, um dein Passwort zurückzusetzen.
        </p>
        <form
          className={styles["form"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type="email" name="email" placeholder="E-Mail" required />
          <Button type="submit">Passwortänderung anfordern</Button>
        </form>
        <div className={styles["text"]}>
          <span>Passwort wieder eingefallen? </span>
          <div onClick={onSignIn}>Anmelden</div>
        </div>
      </div>
    </div>
  );
};

export default RequestNewPasswordComponent;
