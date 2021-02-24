import React from 'react';
import ReactDOM from 'react-dom';

import './style/director-style.css';
import App from './App';
import { Login } from './pages/Login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './Config/Context'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <Route path='/login' exact component={Login} />
        <App />

      </Router>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
