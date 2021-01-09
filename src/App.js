import React from "react";
import "./App.css";
import AccountAction from "./containers/AccountAction/AccountAction";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Switch,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import history from "./history/history";
import HashHistory from "./history/history";

function App() {
  // const history = createBrowserHistory({forceRefresh: true});
  return (
    <HashRouter basename={process.env.PUBLIC_URL} history={history}>
      <div className="App">
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/account"}
            component={AccountAction}
          />
          <Route
          exact
            path={process.env.PUBLIC_URL + "/"}
            component={HomePage}
          />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
