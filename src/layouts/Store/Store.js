import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import StoreContext from './StoreContext';
import { signInUser, loadPanels } from './StoreHelper';

const Store = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [panels, setPanels] = useState(undefined);
  const jwt = useRef(null);

  useEffect(() => {
    signInUser((userData) => {
      jwt.current = userData.token;
      setUser(userData.user);
    });
    loadPanels((newPanels) => setPanels(newPanels));
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
