import React from "react";
import {
  withRouter,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import styles from "./ResetPassword.module.scss";
import Button from "../../components/Button/Button";
import H1 from "../../components/H1/H1";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import UserApi from "../../api/UserApi";

const ResetPassword = () => {
  const { resetPasswordToken } = useParams();
  const history = useHistory();

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
        return Notification.setErrorMessages(json.errors);
      }
      history.push("/sign_in");
      return Notification.success("Du kannst dich jetzt mit dem neuen Passwort anmeden", "Passwort erfolgreich geändert");
    } catch (obj) {
      return Notification.setErrorMessages(obj.errors);
    }
  };

  return (
    <div className={styles["reset-password"]}>
      <div className={styles["container"]}>
        <H1>Neues Passwort festlegen</H1>
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
