import React, { Component } from 'react';
import './App.css';
import Plants from './components/Hello.js'
import Home from './components/Home.jsx'
import View from './components/View.jsx'
import New from './components/New.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        {/* <Plants /> */}
        {/* <View /> */}
        <New />
      </div>
    );
  }
}

export default App;
