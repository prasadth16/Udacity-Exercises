import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MirrorText from "./MirrorText.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mirror Of The Text
          </p>
          <MirrorText />
        </header>
      </div>
    );
  }
}

export default App;
