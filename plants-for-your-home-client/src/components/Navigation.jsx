import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Navigation() {
    return (
        <div className="links">
            <nav>
                <div className="linkBox">
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/view">
                        View
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
                </div>
            </nav>
        </div>
    );
}

export default Navigation;