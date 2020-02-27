import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Notification from "react-notifications-component";

import { Store } from "./contexts/StoreContext/StoreContext";
import { Player } from "./contexts/PlayerContext/PlayerContext";
import NavBar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import NavbarBuffer from "./layouts/NavbarBuffer/NavbarBuffer";
import { Modal } from "./contexts/ModalContext/ModalContext";
import Routes from "./Routes";
import ScrollToTop from "./helper/ScrollToTopHelper";
import Piwik from "./helper/PiwikHelper";

const history = createBrowserHistory();

const App = () => (
  <Store>
    <Router history={Piwik.connectToHistory(history)}>
      <ScrollToTop />
      <NavBar />
      <Notification />
      <Modal>
        <NavbarBuffer>
          <Player>
            <Routes />
          </Player>
        </NavbarBuffer>
      </Modal>
      <Footer />
    </Router>
  </Store>
);

export default App;
