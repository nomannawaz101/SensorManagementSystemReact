import React, { Component } from "react";
import Table from "../components/table.component";



export default class Sensors extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // UserService.getPublicContent().then(
        //     response => {
        //         this.setState({
        //             content: response.data
        //         });
        //     },
        //     error => {
        //         this.setState({
        //             content:
        //                 (error.response && error.response.data) ||
        //                 error.message ||
        //                 error.toString()
        //         });
        //     }
        // );
    }

    render() {
        return(
            <div>
            <Table/>
            </div>
        );
    }
}