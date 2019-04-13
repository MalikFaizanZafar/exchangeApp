import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers';

import VideoSelectScreen from './screens/VideoSelectScreen';
import ConvertScreen from './screens/ConvertScreen';

ReactDOM.render(
  <Provider store={store}>
    {/* <Router>
      <div className="app">
        <Switch>
          <Route path="/convert" component={ConvertScreen} />
          <Route path="/" component={VideoSelectScreen} />
        </Switch>
      </div>
    </Router> */}
    <div>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Exchange App</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a >Heading 1</a></li>
        <li><a>Heading 2</a></li>
        <li><a >Heading 3</a></li>
      </ul>
    </div>
  </nav>
    </div>
  </Provider>,
  document.getElementById('root')
);
