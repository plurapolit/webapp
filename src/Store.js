import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './contexts/StoreContext';
import { signIn } from './api/UserApi';

const signInUser = async (loaded) => {
  const userData = {
    email: 'robinzuschke@hotmail.de',
    password: 'secret',
    remember_me: '1',
  };
  const user = await signIn(userData);
  loaded(user);
};

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const jwt = useRef(null);

  useEffect(() => {
    signInUser((userData) => {
      jwt.current = userData.token;
      console.log('jwt.current ', jwt.current);
      setUser(userData.user);
    });
  }, []);

  return (
    <StoreContext.Provider
      value={
        {
          user,
        }
      }
    >
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node,
};

Store.defaultProps = {
  children: null,
};

export default Store;
