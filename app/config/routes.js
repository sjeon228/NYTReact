import React from "react";

import { Route, Router, hashHistory, IndexRoute } from "react-router";

import Main from "../components/Main";
import Search from "../components/children/Search";
import Saved from "../components/children/Saved";
import Results from "../components/children/Results";

module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="Search" component={Search} />
            <Route path="Results" component={Results} />
            <Route path="Saved" component={Saved} />
        </Route>
    </Router>
);
