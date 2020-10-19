import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Page imports
import User from "./Pages/User";
import UserList from "./Pages/UserList";
import Home from "./Pages/Home";
import Transactions from "./Pages/Transactions";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:id" component={User} />n
      </Switch>
    </Router>
  );
}

export default App;
