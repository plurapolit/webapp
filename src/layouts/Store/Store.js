import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import UserApi from '../../api/UserApi';
import StoreContext from './StoreContext';
import StoreHelper from './StoreHelper';

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [categoryList, setCategoryList] = useState(undefined);
  const [slugList, setSlugList] = useState(undefined);
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    StoreHelper.loadContent((newCategoryList, newSlugList) => {
      setCategoryList(newCategoryList);
      setSlugList(newSlugList);
    });
    console.log('jwt ', jwt);
  }, []);

  const signUp = async (email = 'foo@bar.de', password = 'secret', firstName = 'Foo', lastName = 'Bar') => {
    const newUser = await UserApi.signUp(email, password, firstName, lastName);
    setUser(newUser);
  };

  return (
    <StoreContext.Provider
      value={
        {
          user,
          categoryList,
          slugList,
          setUser,
          signUp,
          setJwt,
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
