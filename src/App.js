import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from './layouts/Store/Store';
import Routes from './Routes';

const App = () => (
  <Store>
    <Router>
      <Routes />
    </Router>
  </Store>
);

export default App;
