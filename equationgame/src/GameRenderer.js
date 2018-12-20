import React, { Component } from "react";

let value1 = Math.floor(Math.random() * 100);
let value2 = Math.floor(Math.random() * 100);
let value3 = Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;


class GameRenderer extends Component {
    state = {
        val1: value1,
        val2: value2,
        val3: value3,
        valp: proposedAnswer
    }
    refreshState = () => {
        this.setState((currentState) => {
            this.state.val1 = Math.floor(Math.random() * 100);
            this.state.val2 = Math.floor(Math.random() * 100);
            this.state.val3 = Math.floor(Math.random() * 100);
            this.state.valp = Math.floor(Math.random() * 3) + this.state.val1 + this.state.val2 + this.state.val3;
        })
    }
    isCorrectAnswer = (value) => {
        let actualAnswer = this.state.val1 + this.state.val2 + this.state.val3;
        if (actualAnswer === this.state.valp) {
            this.props.updatePoints(true);
        }
        else
            this.props.updatePoints(false);
    }

    doOperations = (value) => {
        this.isCorrectAnswer(value);
        this.refreshState();
    }

    render() {
        return (
            <div className="GameRnder">
                <div className="Problem">
                    <p className="equationDisply">{this.state.val1} + {this.state.val2} +{this.state.val3} = {this.state.valp}</p>
                </div>
                <div className="guess">
                    <input type="radio" name="ansGuess" value="Correct" onClick={() => this.doOperations(this.value)} />
                    <input type="radio" name="ansGuess" value="InCorrect" onClick={() => this.doOperations(this.value)} />
                </div>
            </div>
        );
    }
}
export default GameRenderer; 