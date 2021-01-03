import React, { Component } from "react";

class Form1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={
                            this.state.username
                        }
                        onChange={
                            this
                                .handleUsernameChange
                        }
                    />
                    <h1>{this.state.username}</h1>
                </div>
            </form>
        );
    }
}

export default Form1;
