import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page from "./pages/Page";
import UserPage from "./pages/UserPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/users/:page' component={Page}/>
        <Route path='/user/:id' component={UserPage}/>
      </Switch>
    </Router>
  );
};

export default App;
