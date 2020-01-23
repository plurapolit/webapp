import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import UserApi from '../../api/UserApi';
import StoreContext from './StoreContext';
import StoreHelper from './StoreHelper';

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categories, setCategories] = useState(undefined);
  const jwt = useRef(null);

  useEffect(() => {
    StoreHelper.loadCategories((newCategories) => setCategories(newCategories));
  }, []);

  const signIn = async (email = 'robinzuschke@hotmail.de', password = 'secret', rememberMe = '1') => {
    const data = await UserApi.signIn(email, password, rememberMe);
    jwt.current = data.token;
    setUser(data.user);
  };

  const signUp = async (email = 'foo@bar.de', password = 'secret', firstName = 'Foo', lastName = 'Bar') => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  return (
    <StoreContext.Provider
      value={
        {
          user,
          categories,
          signIn,
          signUp,
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
