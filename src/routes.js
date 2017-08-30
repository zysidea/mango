import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Container from './container/index';
import Login from './pages/login/login';

const isLogin = false;

const routes = (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={() => (
          isLogin ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/login" />
          )
        )}
      />
      <Route component={Container} />
    </Switch>
  </Router>
);
export default routes;
