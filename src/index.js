import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Player from './components/Player/Player';
import './styles/index.scss';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Player />
      <Routes />
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
