import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Notification from "react-notifications-component";

import { User } from "./contexts/UserContext/UserContext";
import { Store } from "./contexts/StoreContext/StoreContext";
import { Player } from "./contexts/PlayerContext/PlayerContext";
import NavBar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import NavbarBuffer from "./layouts/NavbarBuffer/NavbarBuffer";
import { Modal } from "./contexts/ModalContext/ModalContext";
import ScrollToTop from "./helper/ScrollToTopHelper";
import Piwik from "./helper/PiwikHelper";
import Routes from "./Routes";

const history = createBrowserHistory();

const App = () => (
  <User>
    <Store>
      <Router history={Piwik.connectToHistory(history)}>
        <Modal>
          <ScrollToTop />
          <NavBar />
          <Notification />
          <NavbarBuffer>
            <Player>
              <Routes />
            </Player>
          </NavbarBuffer>
        </Modal>
        <Footer />
      </Router>
    </Store>
  </User>
);

export default App;
