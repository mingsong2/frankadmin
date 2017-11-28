import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DataEntry from './components/dataEntry/index';

class RouteComponent extends Component {
    render() {
        return (
            <Router>
                <Route path="/dataEntry" component={DataEntry} />
            </Router>
        );
    }
}

export default RouteComponent