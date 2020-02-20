import React from "react";
import { Route, Switch } from "react-router-dom";
import Notification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { Player } from "./layouts/Player/PlayerContext";
import NavBar from "./components/Navbar/Navbar";
import NavbarBuffer from "./layouts/NavbarBuffer/NavbarBuffer";
import Footer from "./components/Footer/Footer";
import HomePage from "./views/HomePage/HomePage";
import Terms from "./views/Terms/Terms";
import SiteNotice from "./views/SiteNotice/SiteNotice";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import PanelWrapper from "./layouts/PanelWrapper/PanelWrapper";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import RequestNewPassword from "./views/RequestNewPassword/RequestNewPassword";
import { Modal } from "./layouts/Modal/ModalContext";

const Routes = () => (
  <>
    <NavBar />
    <Notification />
    <Modal>
      <NavbarBuffer>
        <Player>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/terms/">
              <Terms />
            </Route>
            <Route exact path="/site-notice/">
              <SiteNotice />
            </Route>
            <Route exact path="/privacy-policy/">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/sign_in/">
              <SignIn />
            </Route>
            <Route path="/reset_password/:resetPasswordToken">
              <ResetPassword />
            </Route>
            <Route path="/request_new_password/">
              <RequestNewPassword />
            </Route>
            <Route exact path="/sign_up/">
              <SignUp />
            </Route>
            <Route path="/:slug">
              {(props) => (
                <PanelWrapper
                  location={props.location}
                />
              )}
            </Route>
          </Switch>
        </Player>
      </NavbarBuffer>
    </Modal>
    <Footer />
  </>
);

export default Routes;
