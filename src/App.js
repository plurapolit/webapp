import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Store } from "./contexts/Store/StoreContext";
import Routes from "./Routes";
import ScrollToTop from "./helper/ScrollToTopHelper";
import Piwik from "./helper/PiwikHelper";

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
