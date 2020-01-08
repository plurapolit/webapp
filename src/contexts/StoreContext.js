import React from 'react';
import { emptyPromise } from '../helper/emptyPromise';

const StoreContext = React.createContext({
  user: emptyPromise,
});

export default StoreContext;
