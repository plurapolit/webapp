import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from './layouts/Store/Store';
import Routes from './Routes';
import Player from './components/Player/Player';

const App = () => (
  <Store>
    <Router>
      <Player />
      <Routes />
    </Router>
  </Store>
);

export default App;
