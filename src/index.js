import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/director-style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Store from './components/Store'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <Switch>
          <Route path='/Login' exact component={Login} />
          <App />
        </Switch>
      </Router>

    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
