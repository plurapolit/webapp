import React, { useState, useEffect } from 'react';
import { fetchUserById } from './api/UserApi';
import { emptyPromise } from './helper/emptyPromise';
import StoreContext from './contexts/StoreContext';

const Store = ({ children }) => {
  const [user, setUser] = useState(emptyPromise);

  useEffect(() => {
    fetchUserById(1, (newUser) => setUser(newUser));
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

export default Store;
