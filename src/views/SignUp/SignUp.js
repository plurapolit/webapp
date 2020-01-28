import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

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
    <ContentWrapper>
      <div className={styles["sign_up"]}>
        {error ? getErrorMessage() : null}
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="text" name="firstName" placeholder="Vorname" required />
          <input type="text" name="lastName" placeholder="Nachname" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <input type="password" name="password" placeholder="Passwort" required />
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
        <span>Sind sie vielleicht schon </span>
        <SignInButton>angemeldet</SignInButton>
        <span>?</span>
      </div>
    </ContentWrapper>
  );
};

export default withRouter(SignUp);
