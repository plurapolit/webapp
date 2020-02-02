import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import StoreContext from './layouts/Store/StoreContext';
import NavBar from './components/Navbar/Navbar';
import NavbarBuffer from './layouts/NavbarBuffer/NavbarBuffer';
import Footer from './components/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import Terms from './views/Terms/Terms';
import PanelWrapper from './layouts/PanelWrapper/PanelWrapper';
import Topics from './views/Topics';
import Thanks from './views/Thanks';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';

const Routes = () => (
  <StoreContext.Consumer>
    {(data) => (
      <>
        <NavBar user={data.user} />
        <Notification />
        <NavbarBuffer>
          <Switch>
            <Route exact path="/">
              <HomePage categoryList={data.categoryList} />
            </Route>
            <Route exact path="/terms/">
              <Terms />
            </Route>
            <Route exact path="/topics/" component={Topics} />
            <Route exact path="/thanks/" component={Thanks} />
            <Route exact path="/sign_in/">
              <SignIn />
            </Route>
            <Route exact path="/sign_up/">
              <SignUp setUser={data.setUser} />
            </Route>
            <Route path="/:slug">
              <PanelWrapper slugList={data.slugList} />
            </Route>
          </Switch>
        </NavbarBuffer>
        <Footer />
      </>
    )}
  </StoreContext.Consumer>
);

export default Routes;
