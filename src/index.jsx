import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import test from './reducers/test';
import routes from './route';

const store = createStore(test);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
