import React, { Component } from "react";
import PropTypes from "prop-types";

import logo from "./logo.svg";
import "./App.css";
import FragmentDemo from "components/FragmentDemo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Tushar </h1>
                <FragmentDemo />
            </div>
        );
    }
}

export default App;
