import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
    return (
        <div className="links-container">
            <a href="/"><h1>PLANTS FOR YOUR HOME</h1></a>
                    <NavLink exact className="links" activeClassName="active" to="/">
                        Home
                    </NavLink>
                    <NavLink exact className="links" activeClassName="active" to="/view">
                        View
                    </NavLink>
                    <NavLink exact to="/new" className="links" activeClassName="active">
                        New
                    </NavLink>
                    <NavLink exact to="/about" className="links" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink exact to="/links" className="links" activeClassName="active">
                        Links
                    </NavLink>
        </div>
    );
}

export default Navigation;