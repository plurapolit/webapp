import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import StoreContext from './contexts/StoreContext';
import Panels from './components/Panels';
import User from './components/User';
import { isLoaded } from './helper/helper';

const Routes = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <StoreContext.Consumer>
        { (data) => (
          <>
            {isLoaded(data.user, <User user={data.user} />)}
            {isLoaded(data.panels, <Panels panels={data.panels} />)}
          </>
        )}
      </StoreContext.Consumer>
    </div>
  );
};

export default Routes;
