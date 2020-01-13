import React from 'react';
// import './styles/Home.css';

function Home() {
    return (
        <div className="home-container">
                <div className="main">
                    <h1>PLANTS FOR YOUR HOME</h1>
                    <div className="links">
                        <a href="/view">View</a>
                        <a href="/new">New</a>
                        <a href="/about">About</a>
                        <a href="/links">Links</a>
                    </div>
                </div>
        </div>
    );
}

export default Home;   