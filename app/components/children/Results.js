import React from "react";
import Main from "../Main";
import Saved from "./Saved";

import helpers from "../utils/helpers";

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        // var newState = {};
        // newState[event.target.id] = event.target.value;
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        helpers.postArticles(this.props.articles).then(function() {
            console.log("Posted!", this.state.articles);
    
            helpers.getArticles().then(function(response) {
                console.log("Current Articles", response.data);
    
                console.log("Articles", response.data);
    
                this.setState({ list: response.data[0].title });
    
                console.log("list", this.state.list);
            }.bind(this));
        }.bind(this));
    }
    

    render() {
        return (

        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title">Search Results</h5>
            </div>
            <div className="panel-body searchResults">
                <p>{this.props.articles}</p>
                <button type="submit" className="btn btn-default" id = "searchBtn">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>Save
                        </button>
                
            </div>

            <div className="row">
                <Saved saved={this.state.list} />
            </div>

        </div>
        );
    }
}

export default Results;