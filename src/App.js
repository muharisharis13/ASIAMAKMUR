import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardKepalaPabrik } from './pages/index'
import { Login } from './pages/Login/Login';
import { Context } from './Config/Context';

function App() {
  const { showSideBar } = useContext(Context)


  return (
    <Router>
      <div className="header">
        <Navbar />

      </div>
      <Switch>

        <Route path='/login' exact component={Login} />
        <div className={showSideBar ? 'content active' : 'content'}>
          <Route path='/' component={DashboardKepalaPabrik} />
        </div>

      </Switch>

    </Router>
  );
}

export default App;
