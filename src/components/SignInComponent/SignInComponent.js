import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SignInComponent.module.scss';
import Button from '../Button/Button';
import UserApi from '../../api/UserApi';
import { getDataFromEvent, setNotification } from '../../helper/helper';
import JwtApi from '../../api/JwtApi';

const SignInComponent = ({ setUser, routeBack = () => {} }) => {
  const handleSubmit = async (event) => {
    const inputData = getDataFromEvent(event);
    try {
      const data = await UserApi.signIn(inputData.email, inputData.password);
      setUser(data.user);
      JwtApi.set(data.token);
      routeBack();
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

export default SignInComponent;
