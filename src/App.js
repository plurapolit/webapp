import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from './Store';
import Routes from './Routes';

const App = () => {
  return (
    <Store>
      <Router>
        <Routes />
      </Router>
    </Store>
  );
};

export default App;
