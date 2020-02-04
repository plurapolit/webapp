import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Store from './layouts/Store/Store';
import Routes from './Routes';
import ScrollToTop from './helper/ScrollToTop';
import Piwik from './helper/Piwik';

const history = createBrowserHistory();

const App = () => (
  <Store>
    <Router history={Piwik.connectToHistory(history)}>
      <ScrollToTop />
      <Routes />
    </Router>
  </Store>
);

export default App;
