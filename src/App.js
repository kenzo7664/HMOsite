import Page from "./login/Page";
import Dashboard from "./Dashboard/Dashboard";
import Claims from './Claims/Claims'
import Verification from './login/PasswordVerification/Verification'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Page} />
        <Route path='/dash'  component={Dashboard} />
        <Route path = '/claims' component ={Claims} />
        <Route exact path="/Verification" component={Verification} />
      </Switch>
    </Router>
  );
}

export default App;
