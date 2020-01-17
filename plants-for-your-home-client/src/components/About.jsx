import React from 'react';
import './styles/About.css';
import Navigation from './Navigation'

function About() {
    return (
        <div className="about-container">
            <Navigation />
            <div className="main">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    );
}

export default About;   