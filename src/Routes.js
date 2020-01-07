import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Routes;
