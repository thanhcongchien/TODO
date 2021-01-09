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
    <BrowserRouter basename="/TODO" history={history}>
      <div className="App">
        <Switch>
          <Route path="/account" component={AccountAction} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// basename={process.env.PUBLIC_URL}
// process.env.PUBLIC_URL +