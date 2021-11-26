import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import CreatePosition from "./pages/AddPosition";
import EditPosition from "./pages/EditPosition";
import PositionList from "./pages/PositionList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/positions" className="navbar-brand">
            Curcumy
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/positions"} className="nav-link">
                Positions
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create-position"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
                <Route path="/positions" element={<PositionList/>} />
                <Route path="/create-position" element={<CreatePosition/>} />
                <Route path="/edit-position/:id" element={<EditPosition/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
