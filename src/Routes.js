import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "react-notifications-component/dist/theme.css";

import HomePage from "./views/HomePage/HomePage";
import Terms from "./views/Terms/Terms";
import SiteNotice from "./views/SiteNotice/SiteNotice";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import RequestNewPassword from "./views/RequestNewPassword/RequestNewPassword";
import Loader from "./components/Loader/Loader";

const PanelWrapperPromise = import("./layouts/PanelWrapper/PanelWrapper");
const PanelWrapper = lazy(() => PanelWrapperPromise);

const Routes = () => (
  <>
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
      <Route exact path="/spinner">
        <Loader size={35} borderWidth={"0.3rem"} />
      </Route>
      <Route path="/:slug">
        <Suspense fallback={<Loader />}>
          <PanelWrapper />
        </Suspense>
      </Route>
    </Switch>
  </>
);

export default Routes;
