import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reducers";
import MainPage from "./screens/MainPage";
import AppBottomBar from "./components/AppBottomBar";
import DepartmentPage from "./screens/DepartmentPage";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route exact={true} path="/department" component={DepartmentPage} />
        </Switch>
        <AppBottomBar style={{ marginTop: 400 }} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
