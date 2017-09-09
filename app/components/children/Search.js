import React from "react";
import { Link } from "react-router";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state= {

        };
    }

    render() {
        return (

        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title">Search for an Article</h5>
            </div>
            <div className="panel-body serachParameters">
                {/* <form>
                    <div className="form-group">
                        <p>Topic</p>
                        <input type="text" className="form-control" id="searchText">
                    </div>
                </form> */}
                {/* <form>
                    <div className="form-group">
                        <p>Start Year</p>
                        <input type="text" className="form-control" id="startYear">
                    </div>
                </form>
                <form>
                    <div className="form-group">
                        <p>End Year</p>
                        <input type="text" className="form-control" id="endYear">
                    </div>
                </form> */}
                <Link to="/Results"><button type="button" className="btn btn-default" id = "serachBtn">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>Search
                </button></Link>
                <button type="button" className="btn btn-default" id = "clearBtn">
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Clear Results
                </button>
            </div>

        </div>
        );
    }
}

export default Search;