import React from 'react';
import './styles/Links.css';
import Navigation from './Navigation'

function Links() {
    return (
        <div className="link-container">
            <Navigation />
            <div className="main">
                <h1>Links</h1>
                <p>Just kidding, I have no social media.</p>
            </div>
        </div>
    );
}

export default Links;   