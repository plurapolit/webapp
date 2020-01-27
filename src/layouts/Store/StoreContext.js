import React from 'react';

const StoreContext = React.createContext({
  user: undefined,
  panels: undefined,
});

export default StoreContext;
