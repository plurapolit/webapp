import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './styles/index.scss';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('root'),
);
