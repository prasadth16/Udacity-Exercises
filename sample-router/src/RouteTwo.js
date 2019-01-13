import React, { Component } from "react";
import { Link } from "react-router-dom";

class RouteTwo extends Component
{
    render(){
        return(
        <div className="Router2">
            <div className="Router2Display">
                <p>In Router 2 !!!!!</p>
            </div>
            <div className="LinkRouter2">
                <Link to="/1">ToR2</Link>
            </div>
        </div>);
    }

}

export default RouteTwo;