import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './SignIn.module.scss';
import Button from '../../components/Button/Button';
import UserApi from '../../api/UserApi';
import { getDataFromEvent, setNotification } from '../../helper/helper';
import JwtApi from '../../api/JwtApi';

const SignIn = ({ setUser, history }) => {
  const handleSubmit = async (event) => {
    const inputData = getDataFromEvent(event);
    try {
      const data = await UserApi.signIn(inputData.email, inputData.password);
      setUser(data.user);
      JwtApi.set(data.token);
      history.push('/');
      setNotification({ message: 'Sie wurden erfolgreich angemeldet', type: 'success' });
    } catch (obj) {
      setNotification({ message: obj.error, type: 'warning' });
    }
  };

  return (
    <div className={styles["sign_in"]}>
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
