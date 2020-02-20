import React from "react";
import { useParams } from "react-router";
import { withRouter, Link } from "react-router-dom";

import styles from "./ResetPassword.module.scss";
import Button from "../../components/Button/Button";
import { getDataFromEvent, setErrorMessages } from "../../helper/helper";
import Notification from "../../helper/NotificationHelper";
import UserApi from "../../api/UserApi";

const ResetPassword = ({ history }) => {
  const { resetPasswordToken } = useParams();

  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const res = await UserApi.resetPassword(
        input.password,
        input.password_confirmation,
        resetPasswordToken,
      );
      if (res.status !== 204) {
        const json = await res.json();
        return setErrorMessages(json.errors);
      }
      history.push("/sign_in");
      return Notification.success("Du kannst dich jetzt mit dem neuen Passwort anmeden", "Passwort erfolgreich geändert");
    } catch (obj) {
      return setErrorMessages(obj.errors);
    }
  };

  return (
    <div className={styles["reset-password"]}>
      <div className={styles["container"]}>
        <h1>Neues Passwort festlegen</h1>
        <form
          className={styles["form"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="password"
            name="password"
            placeholder="Neues Passwort"
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Passwort bestätigen"
            required
          />
          <Button type="submit">Passwort ändern</Button>
        </form>
        <div className={styles["text"]}>
          <span>Passwort wieder eingefallen? </span>
          <Link to="/sign_in/">Anmelden</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ResetPassword);
