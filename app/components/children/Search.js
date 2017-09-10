import React from "react";
import { Link } from "react-router";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            topic: "",
            start: "",
            end:""
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
        console.log(this.state.topic, this.state.start, this.state.end);
        this.props.setTerm(this.state.topic, this.state.start, this.state.end);
        this.setState({
            topic: "",
            start: "",
            end: ""
        });
    }


    render() {
        return (

        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title">Search for an Article</h5>
            </div>
            <div className="panel-body serachParameters">
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        Search Topic
                        <input
                            type="text"
                            value={this.state.topic}
                            className="form-control text"
                            id="topic"
                            onChange={this.handleChange}
                            required
                        />
                        <br />

                        Start Year
                        <input
                            type="text"
                            value={this.state.start}
                            className="form-control text"
                            id="start"
                            onChange={this.handleChange}
                            required
                        />
                        <br />

                        End Year
                        <input
                            type="text"
                            value={this.state.end}
                            className="form-control text"
                            id="end"
                            onChange={this.handleChange}
                            required
                        />
                        <br />

                        <button type="submit" className="btn btn-default" id = "searchBtn">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>Search
                        </button>
                        <button type="button" className="btn btn-default" id = "clearBtn">
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Clear Results
                        </button>
                    </div>
                </form>
            </div>

        </div>
        );
    }
}

export default Search;