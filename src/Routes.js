import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import { kebabCase } from "lodash";

import Terms from "./views/Terms/Terms";
import SiteNotice from "./views/SiteNotice/SiteNotice";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import RequestNewPassword from "./views/RequestNewPassword/RequestNewPassword";
import PanelWrapper from "./layouts/PanelWrapper/PanelWrapper";
import HomePageWrapper from "./layouts/HomePageWrapper/HomePageWrapper";
import { useStoreContext } from "./contexts/StoreContext/StoreContext";

const Routes = () => {
  const { getRegionRoutes } = useStoreContext();
  const regions = getRegionRoutes();
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePageWrapper id={1} />
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
        {regions.map((region) => (
          <Route exact path={`/${kebabCase(region.name)}/`} key={region.id}>
            <HomePageWrapper id={region.id} />
          </Route>
        ))}
        <Route path="/:slug">
          <PanelWrapper />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
