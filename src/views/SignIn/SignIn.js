import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SignIn.module.scss';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Button from '../../components/Button/Button';
import UserApi from '../../api/UserApi';
import { getDataFromEvent, setNotification } from '../../helper/helper';
import SignUpButton from '../../components/SignUpButton/SignUpButton';
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
    <div>
      <ContentWrapper>
        <div className={styles["sign_in"]}>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input type="email" name="email" placeholder="E-Mail" required />
            <input type="password" name="password" placeholder="Passwort" required />
            <Button type="submit">Anmelden</Button>
          </form>
          <SignUpButton>Registieren</SignUpButton>
          <span> sie sich jetzt.</span>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default withRouter(SignIn);
