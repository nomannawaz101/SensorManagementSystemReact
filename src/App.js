import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";


import Header from "./components/header.component";
import Home from "./components/home.component";


class App extends Component {
    constructor(props) {console.log('app constructor called.');
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined
        };
    }

    componentDidMount() {

    }

    logOut() {
        AuthService.logout();
    }

    render() {
    return(
        <div className="container-fluid">
            <Header/>
            </div>

    );
    }

}

export default App;