import Page from "./login/Page";
import Dashboard from "./Dashboard/Dashboard";
import Claims from './Claims/Claims'
import Verification from './login/PasswordVerification/Verification'
import SearchEnrollee from "./Dashboard/SearchEnrollee/SearchEnrollee";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Page} />
        <Route path='/dash'  component={Dashboard} />
        <Route path = '/claims' component ={Claims} />
        <Route exact path="/Verification" component={Verification} />
        <Route exact path="/SearchEnrollee" component={SearchEnrollee} />
      </Switch>
    </Router>
  );
}

export default App;
