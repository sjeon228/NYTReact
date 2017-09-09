import React from "react";

class Saved extends React.Component {
    constructor(props) {
        super(props);

        this.state= {

        };
    }

    render() {
        return (

        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title">Saved Articles</h5>
            </div>
            <div className="panel-body topArticles">
            </div> 

        </div>
        );
    }
}

export default Saved;