import fire from "./fire";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoggedInHeader from "./Components/LoggedInHeader";


const Give = () => {

  return (
    <Router>
        <LoggedInHeader/>
       <Route exact path="/dashboard" render={() => <Dashboard />}></Route>
    </Router>
  );
};

export default Give;
