import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from './layouts/Store/Store';
import Routes from './Routes';
import ScrollToTop from './helper/ScrollToTop';


const App = () => (
  <Store>
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  </Store>
);

export default App;
