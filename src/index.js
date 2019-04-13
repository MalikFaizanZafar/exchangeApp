import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers';
import MainPage from './screens/MainPage';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
