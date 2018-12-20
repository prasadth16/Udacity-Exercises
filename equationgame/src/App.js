import React, { Component } from "react";
import GamePointManager from "./GamePointManager.js";

class App extends Component {

  render() {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <GamePointManager />
        </div>
      </div>

    );
  }
}

export default App;
