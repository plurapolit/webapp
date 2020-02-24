import React from "react";
import { withRouter, Link } from "react-router-dom";

import styles from "./SignUp.module.scss";
import Button from "../../components/Button/Button";
import { getDataFromEvent } from "../../helper/FormHelper";
import Notification from "../../helper/NotificationHelper";
import UserApi from "../../api/UserApi";
import JwtApi from "../../api/JwtApi";
import { useStoreContext } from "../../contexts/StoreContext/StoreContext";

const SignUp = ({ history }) => {
  const { setUser } = useStoreContext();
  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const data = await UserApi.signUp(
        input.email,
        input.password,
        input.firstName,
        input.lastName,
        input.ageRange,
      );
      setUser(data.user);
      JwtApi.set(data.token);
      history.push("/");
      Notification.signedIn(data.user.first_name, data.user.last_name);
    } catch (obj) {
      Notification.setErrorMessages(obj.errors);
    }
  };

  return (
    <div className={styles["sign-up"]}>
      <div className={styles["container"]}>
        <h1>Registrierung</h1>
        <form
          className={styles["form"]}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type="text" name="firstName" placeholder="Vorname" required />
          <input type="text" name="lastName" placeholder="Nachname" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
          />
          <label htmlFor="ageRange">
            Alter (optional)
            <div>
              <select name="ageRange" defaultValue="0" className={styles["age-range-selector"]}>
                <option value="null"> </option>
                <option value="1">0-15</option>
                <option value="2">16-28</option>
                <option value="3">29-44</option>
                <option value="4">45-60</option>
                <option value="5">61-99+</option>
              </select>
            </div>
          </label>
          <Button type="submit">Registrieren</Button>
        </form>
        <div className={styles["text"]}>
          <span>Du hast bereits ein Konto? </span>
          <Link to="/sign_in/">Anmelden</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
