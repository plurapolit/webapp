import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import UserApi from '../../api/UserApi';
import StoreContext from './StoreContext';
import StoreHelper from './StoreHelper';

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);
  const jwt = useRef(null);

  useEffect(() => {
    StoreHelper.loadContent((newCategoryList, newSlugList) => {
      setCategoryList(newCategoryList);
      setSlugList(newSlugList);
    });
  }, []);

  const signIn = async (email = 'robinzuschke@hotmail.de', password = 'secret') => {
    const data = await UserApi.signIn(email, password);
    jwt.current = data.token;
    setUser(data.user);
  };

  const signUp = async (email = 'foo@bar.de', password = 'secret', firstName = 'Foo', lastName = 'Bar') => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  useEffect(() => {
    console.log('categoryList ', categoryList);
    console.log('slugList ', slugList);
  }, [categoryList, slugList]);

  return (
    <StoreContext.Provider
      value={
        {
          user,
          categoryList,
          slugList,
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
