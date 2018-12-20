import React, { Component } from "react";
import GameRenderer from "./GameRenderer.js"

class GamePointManager extends Component {

    state = {
        totalQuestion: 0,
        totalcorrect: 0
    }
    addPointsAndQuestions = (isCorrectAnswer) => {

        this.setState((currentState) =>
            currentState.totalQuestion = currentState.totalQuestion + 1
        );
        if (isCorrectAnswer) {
            this.setState((currentState) =>
                currentState.totalcorrect = currentState.totalcorrect + 1
            )
        }
    }
    render() {
        return (
            <div className="mainDiv">
                <div className="renderGame">
                    <GameRenderer updatePoints={this.addPointsAndQuestions} />
                </div>
                <div className="score">
                    <p>{this.state.totalcorrect}/{this.state.totalQuestion}</p>
                </div>
            </div>)

    }
}

export default GamePointManager;