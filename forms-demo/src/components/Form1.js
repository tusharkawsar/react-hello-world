import React, { Component } from "react";

class Form1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            topic: "react",
        };
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value,
        });
    };

    handleSubmit = (event) => {
        console.log(event.target);
        console.log(this.state);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                <div>
                    <label>Topic</label>
                    <select
                        value={this.state.topic}
                        onChange={
                            this.handleTopicChange
                        }
                    >
                        <option value="react">
                            React
                        </option>
                        <option value="angular">
                            Angular
                        </option>
                    </select>
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form1;
