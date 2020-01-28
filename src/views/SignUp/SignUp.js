import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './SignUp.module.scss';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Button from '../../components/Button/Button';
import { getDataFromEvent } from '../../helper/helper';
import UserApi from '../../api/UserApi';
import JwtApi from '../../api/JwtApi';
import SignInButton from '../../components/SignInButton/SignInButton';

const SignUp = ({ setUser, history }) => {
  const [error, setError] = useState(undefined);

  const handleSubmit = async (event) => {
    const input = getDataFromEvent(event);
    try {
      const data = await UserApi.signUp(input.email, input.password, input.firstName, input.lastName, input.ageRange);
      setUser(data.user);
      JwtApi.set(data.token);
      history.push('/');
    } catch (obj) {
      setError(obj.errors);
    }
  };

  const getErrorMessage = () => {
    return Object.entries(error).map(([key, value], index) => {
      return <p key={index}>{`${key}: ${value}`}</p>;
    });
  };

  return (
    <div className={styles["sign_up"]}>
      {error ? getErrorMessage() : null}
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={(event) => handleSubmit(event)}>
          <input type="text" name="firstName" placeholder="Vorname" required />
          <input type="text" name="lastName" placeholder="Nachname" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <input type="password" name="password" placeholder="Passwort" required />
          <label for="ageRange">Alter (optional)</label>
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
