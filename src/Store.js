import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './contexts/StoreContext';
import { signIn } from './api/UserApi';
import { fetchAllPanels } from './api/PanelApi';

const loadContent = async (loaded) => {
  const panelsPromise = fetchAllPanels();
  const list = await Promise.all([panelsPromise]);
  loaded(...list);
};

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
  const [panels, setPanels] = useState(undefined);
  const jwt = useRef(null);

  useEffect(() => {
    // loadContent((newUser, newPanels) => {
    //   setPanels(newPanels);
    // });
    signInUser((newUser) => {
      console.log('newUser ', newUser);
      setUser(newUser);
    });
  }, []);

  return (
    <StoreContext.Provider
      value={
        {
          user,
          panels,
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
