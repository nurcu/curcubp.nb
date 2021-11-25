import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';

import CreatePosition from "./components/create-position.component";
import EditPosition from "./components/edit-position.component";
import PositionList from "./components/position-list.component";

import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
                <Route exact path={["/", "/positions"]} component={CreatePosition} />
                <Route path="/create-position" component={CreatePosition} />
                <Route path="/edit-position/:id" component={EditPosition} />
                <Route path="/position-list" component={PositionList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
