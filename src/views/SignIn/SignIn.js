import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SignIn.module.scss';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Button from '../../components/Button/Button';
import UserApi from '../../api/UserApi';
import Helper from './SignInHelper';

const SignIn = ({ setUser, setJwt, history }) => {
  const [error, setError] = useState(undefined);

  const handleSubmit = async (event) => {
    const inputData = Helper.getDataFromEvent(event);
    try {
      const data = await UserApi.signIn(inputData.email, inputData.password);
      setUser(data.user);
      setJwt(data.token);
      history.push('/');
    } catch (obj) {
      setError(obj.error);
    }
  };

  return (
    <div>
      <ContentWrapper>
        <div className={styles["sign_in"]}>
          {error ? <p>{error}</p> : null}
          <form onSubmit={(event) => handleSubmit(event)}>
            <input type="email" name="email" placeholder="E-Mail" />
            <input type="password" name="password" placeholder="Passwort" />
            <Button type="submit">Anmelden</Button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default withRouter(SignIn);
