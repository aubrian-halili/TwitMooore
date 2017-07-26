import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component from './components/Component/Component';

import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Route component={Component} />
  </Router>
), document.getElementById('root'));
