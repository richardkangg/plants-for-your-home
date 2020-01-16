import React from 'react';
import './styles/Home.css';

function Home() {
    return (
        <div className="home-container">
                <h1>PLANTS FOR YOUR HOME</h1>
                <div className="links">
                    <a href="/view"><img alt="view" src={require('../images/view.png')} /></a>
                    <a href="/new"><img alt="new" src={require('../images/new.png')} /></a>
                    <a href="/about"><img alt="about" src={require('../images/about.png')} /></a>
                    <a href="/links"><img alt="links" src={require('../images/links.png')} /></a>
                </div>
        </div>
    );
}

export default Home;   