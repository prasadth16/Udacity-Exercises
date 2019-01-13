import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import RouterOne from "./RouteOne.js";
import RouterTwo from "./RouteTwo.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    <Route exact path="/:id" render={()=>(<RouterOne/>)} />
          <Route path="/R2/:id" render={()=>(<RouterTwo/>)} />
        </header>
      </div>
    );
  }
}

export default App;
