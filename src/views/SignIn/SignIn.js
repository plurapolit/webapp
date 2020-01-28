import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './SignIn.module.scss';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Button from '../../components/Button/Button';
import UserApi from '../../api/UserApi';
import { getDataFromEvent } from '../../helper/helper';
import SignUpButton from '../../components/SignUpButton/SignUpButton';
import JwtApi from '../../api/JwtApi';

const SignIn = ({ setUser, history }) => {
  const [error, setError] = useState(undefined);

  const handleSubmit = async (event) => {
    const inputData = getDataFromEvent(event);
    try {
      const data = await UserApi.signIn(inputData.email, inputData.password);
      setUser(data.user);
      JwtApi.set(data.token);
      history.push('/');
    } catch (obj) {
      setError(obj.error);
    }
  };

  return (
    <div className={styles["sign_in"]}>
      {error ? <p>{error}</p> : null}
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={(event) => handleSubmit(event)}>
          <input type="email" name="email" placeholder="E-Mail" required />
          <input type="password" name="password" placeholder="Passwort" required />
          <Button type="submit">Anmelden</Button>
        </form>
        <div className={styles["text"]}>
          <span>Du besitzt keinen Account? </span>
          <Link to={'/sign_up/'}>
            Registieren
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
