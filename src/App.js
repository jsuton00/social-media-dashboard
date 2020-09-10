import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  const [dark, setDark] = useState(false);
  const changeThemeHandler = () => setDark(!dark);

  return (
    <div id="app" className={`theme ${dark ? 'theme-dark' : 'theme-default'}`}>
      <Switch>
        <Route exact path="/">
          <LoginPage changeThemeHandler={changeThemeHandler} dark={dark} />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard changeThemeHandler={changeThemeHandler} dark={dark} />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
