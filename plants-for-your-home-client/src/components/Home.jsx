import React from 'react';
import './styles/Home.css';

function Home() {
    return (
        <div className="home-container">
                <h1>PLANTS FOR YOUR HOME</h1>
                <div className="links">
                    <a href="/view"><img src={require('../images/view.png')} /></a>
                    <a href="/new"><img src={require('../images/new.png')} /></a>
                    <a href="/about"><img src={require('../images/about.png')} /></a>
                    <a href="/links"><img src={require('../images/links.png')} /></a>
                </div>
        </div>
    );
}

export default Home;   