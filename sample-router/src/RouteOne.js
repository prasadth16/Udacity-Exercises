import React, { Component } from "react";
import { Link } from "react-router-dom";

class RouteOne extends Component {

    render() {
        return(
        <div className="Router1">
            <div className="Router1Display">
                <p>In Router 1 !!!!!</p>
            </div>
            <div className="LinkRouter1">
                <Link to="/R2/1">ToR2</Link>
            </div>
        </div>);
    }

}
export default RouteOne;
