import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import CreatePosition from "./components/create-position.component";
import UpdatePosition from "./components/update-position.component";
import PositionList from "./components/position-list.component";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/positions" className="navbar-brand">
            curcumy
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/positions"} className="nav-link">
                Positions
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
          <Routes>
                <Route exact path="/positions" component={PositionList} />
                <Route path="/create-position" component={CreatePosition} />
                <Route path="/edit-position/:id" component={UpdatePosition} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
