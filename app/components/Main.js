import React from "react";
import { Link } from "react-router";

// import Search from "./children/Search";
// import Saved from "./children/Saved";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTopic: "",
            startYear: "",
            endYear: ""
        };
    }

    render() {

        return (

            <div className = "container">
                <div className = "jumbotron">
                    <h1><span className="glyphicon glyphicon-modal-window" aria-hidden="true"></span>New York Times Search</h1>
                    <Link to="/Search"><button className="btn btn-default">Search</button></Link>
                    <Link to="/Saved"><button className="btn btn-default">Saved</button></Link>
                </div>

                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;