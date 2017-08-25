import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import App from './container/app/app';
import Login from './pages/login/login';

const isLogin = false;

const routes = (
  <Router>
    <Switch>
      <Route path="/index" component={App} />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={() => (
          isLogin ? (
            <Redirect to="/index" />
          ) : (
            <Redirect to="/login" />
          )
        )}
      />
    </Switch>
  </Router>
);
export default routes;
