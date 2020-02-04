import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './SignUp.module.scss';
import Button from '../../components/Button/Button';
import { getDataFromEvent } from '../../helper/helper';
import Notification from '../../helper/Notification';
import UserApi from '../../api/UserApi';
import JwtApi from '../../api/JwtApi';

const SignUp = ({ setUser, history }) => {
  const setErrorMessages = (error) => {
    Object.entries(error).forEach(([key, value]) => {
      Notification.warning(value[0], key);
    });
  };

  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const data = await UserApi.signUp(input.email, input.password, input.firstName, input.lastName, input.ageRange);
      setUser(data.user);
      JwtApi.set(data.token);
      history.push('/');
      Notification.signedIn(data.user.first_name, data.user.last_name);
    } catch (obj) {
      setErrorMessages(obj.errors);
    }
  };


  return (
    <div className={styles["sign_up"]}>
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={(event) => handleSubmit(event)}>
          <input type="text" name="firstName" placeholder="Vorname" required />
          <input type="text" name="lastName" placeholder="Nachname" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <input type="password" name="password" placeholder="Passwort" required />
          <label htmlFor="ageRange">Alter (optional)</label>
          <select name="ageRange" defaultValue="0">
            <option value="null" />
            <option value="1">0-15</option>
            <option value="2">16-28</option>
            <option value="3">29-44</option>
            <option value="4">45-60</option>
            <option value="5">61-99+</option>
          </select>
          <Button type="submit">Registieren</Button>
        </form>
        <div className={styles["text"]}>
          <span>Du hast bereits ein Konto? </span>
          <Link to="/sign_in/">
            Anmelden
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
