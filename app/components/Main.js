import React from "react";
import { Link } from "react-router";

import Search from "./children/Search";
import Results from "./children/Results";
// import Saved from "./children/Saved";


import helpers from "./utils/helpers";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTopic: "",
            startYear: "",
            endYear: "",
            results: "",
            list: []
        };

        this.setTerm = this.setTerm.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTopic !== this.state.searchTopic) {
            console.log("Updated");

            helpers.runQuery(this.state.searchTopic, this.state.startYear, this.state.endYear).then((data) => {
                if (data !== this.state.results) {
                    console.log(data);

                    this.setState({ results: data.docs[0].headline.main });
                    console.log("test", this.state.results);

                    // helpers.postArticles(this.state.results).then(function() {
                    //     console.log("Posted!", this.state.results);
        
                    //     helpers.getArticles().then(function(response) {
                    //         console.log("Current Articles", response.data);
        
                    //         console.log("Articles", response.data);
        
                    //         this.setState({ list: response.data[0].title });

                    //         console.log("list", this.state.list);
                    //     }.bind(this));
                    // }.bind(this));
                }
            });

            
        }
    }


    setTerm(topic, start, end) {
        this.setState({
            searchTopic: topic,
            startYear: start,
            endYear: end
        });
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
                    
                    <Search setTerm={this.setTerm} />
                    <Results articles={this.state.results} />
                    {/* {this.props.children} */}
                    {/* {React.cloneElement(this.props.children, { setTerm: this.setTerm})} */}
                </div>
            </div>
        );
    }
}

export default Main;