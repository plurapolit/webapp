import React from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./RequestNewPassword.module.scss";
import Button from "../../components/Button/Button";
import { getDataFromEvent, setErrorMessages } from "../../helper/helper";
import Notification from "../../helper/NotificationHelper";
import UserApi from "../../api/UserApi";

const FIVE_SECONDS = 5000;

const RequestNewPassword = () => {
  const history = useHistory();

  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const res = await UserApi.requestNewPassword(input.email);
      if (res.status !== 201) {
        const json = await res.json();
        return setErrorMessages(json.errors);
      }
      setTimeout(() => {
        history.push("/");
      }, FIVE_SECONDS);
      return Notification.success("Schau in deinem E-Mail Postfach nach", "Passwort Änderung erfolgreich angefordert");
    } catch (obj) {
      return setErrorMessages(obj.errors);
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
          <Link to="/sign_in/">Anmelden</Link>
        </div>
      </div>
    </div>
  );
};

export default RequestNewPassword;
