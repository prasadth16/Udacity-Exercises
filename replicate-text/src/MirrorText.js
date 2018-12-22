import React, { Component } from "react";


class MirrorText extends Component {

    state = {
        text: ''
    }
    updateState = (updatedtext) => {
        this.setState((currentstate) => (
            {
            text : updatedtext
        }))
    }

    render() {
        return (
            <div className="mirrorTextMain">
                <div className="typeText">
                    <textarea name="typTx" defaultValue="" rows="20" cols="30" onChange={(event) => this.updateState(event.target.value)} />
                </div>
                <div className="textPrinter">
                    <p>{this.state.text}</p>
                </div>

            </div>
        );
    }

}

export default MirrorText;