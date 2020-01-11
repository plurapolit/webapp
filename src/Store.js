import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './contexts/StoreContext';
import { fetchUserById } from './api/UserApi';
import { fetchAllPanels } from './api/PanelApi';

const loadContent = async (loaded) => {
  const userPromise = fetchUserById(1);
  const panelsPromise = fetchAllPanels();
  const list = await Promise.all([userPromise, panelsPromise]);
  loaded(...list);
};

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [panels, setPanels] = useState(undefined);

  useEffect(() => {
    loadContent((newUser, newPanels) => {
      setUser(newUser);
      setPanels(newPanels);
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
