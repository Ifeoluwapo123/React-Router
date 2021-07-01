import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/about">
              <h1>about</h1>
            </Route>
            <Route path="/dashboard">
              <h1>dashboard </h1>
            </Route>
            <Route path="/:id" children={<Child/>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Child = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
