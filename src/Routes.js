import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import StoreContext from './contexts/StoreContext';
import Panels from './components/Panels';

const Routes = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <StoreContext.Consumer>
        { (data) => (
          <>
            <Suspense fallback={<p>Userdaten werden geladen</p>}>
              <p>{data.user.first_name}</p>
            </Suspense>
            <Suspense fallback={<p>Paneldaten werden geladen</p>}>
              <Panels panels={data.panels} />
            </Suspense>
          </>
        )}
      </StoreContext.Consumer>
    </div>
  );
};

export default Routes;
