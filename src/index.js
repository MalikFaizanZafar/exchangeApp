import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers';
import MainPage from './screens/MainPage';
import AppTopBar from './components/AppTopBar';
import AppBottomBar from './components/AppBottomBar';
import DepartmentPage from './screens/DepartmentPage';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <AppTopBar />
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route exact={true} path="/department" component={DepartmentPage} />
        </Switch>
       <AppBottomBar />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
