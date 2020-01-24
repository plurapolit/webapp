import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StoreContext from './layouts/Store/StoreContext';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './views/HomePage/HomePage';
import Terms from './views/Terms/Terms';
import Panel from './views/Panel/Panel';
import Topics from './views/Topics';
import Thanks from './views/Thanks';

const Routes = () => (
  <StoreContext.Consumer>
    {(data) => (
      <>
        <NavBar user={data.user} signIn={data.signIn} />
        <Switch>
          <Route exact path="/">
            <HomePage categoryList={data.categoryList} />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/topics/" component={Topics} />
          <Route exact path="/thanks/" component={Thanks} />
          <Route path="/:slug">
            <Panel slugList={data.slugList} />
          </Route>
        </Switch>
        <Footer />
      </>
    )}
  </StoreContext.Consumer>
);

export default Routes;
