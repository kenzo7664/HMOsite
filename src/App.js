import Page from "./login/Page";
import Dashboard from "./Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Page} />
        <Route path='/dash'  component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
