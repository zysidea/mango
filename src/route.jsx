import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Container from './container/App';


const routes = (
  <Router>
    <Route exact path="/" component={Container} />
  </Router>
);
export default routes;
