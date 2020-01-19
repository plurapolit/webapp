import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import Panel from './views/Panel';
import Topics from './views/Topics';
import Thanks from './views/Thanks';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics/" component={Topics} />
        <Route exact path="/thanks/" component={Thanks} />
        <Route path="/:slug" component={Panel} />
      </Switch>
    </div>
  );
};

export default Routes;
