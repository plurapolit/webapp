import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StoreContext from './layouts/Store/StoreContext';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import Terms from './views/Terms/Terms';

const Routes = () => (
  <StoreContext.Consumer>
    {(data) => (
      <>
        <NavBar user={data.user} signIn={data.signIn} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </>
    )}
  </StoreContext.Consumer>
);

export default Routes;
