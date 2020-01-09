import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './contexts/StoreContext';
import { fetchUserById } from './api/UserApi';
import { fetchAllPanels } from './api/PanelApi';

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [panels, setPanels] = useState(undefined);

  useEffect(() => {
    fetchUserById(1, (newUser) => setUser(newUser));
    fetchAllPanels((newPanels) => setPanels(newPanels));
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
