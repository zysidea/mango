import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import App from './container/app/app';
import Login from './pages/login/login';

const isLogin = false;

const routes = (
  <Router>
    <div>
      <Route exact path="/index" component={App} />
      <Route exact path="/login" component={Login} />
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
    </div>
  </Router>
);
export default routes;
