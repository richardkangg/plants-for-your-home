import React, { Component } from 'react';
import { Routes } from './routes'
import { NavLink } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="links">
      <nav>
        {/* <div className="linkBox">
          <Router>
        <NavLink exact activeClassName="active" to="/view">
          View2
        </NavLink>
        <NavLink exact to="/new" activeClassName="active">
          New
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink exact to="/links" activeClassName="active">
          Links
        </NavLink>
        </Router>
        </div> */}
      </nav>
      <Routes />
    </div>
  );
}

export default App;
