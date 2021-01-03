import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment() {
        let x = this.state.count;
        this.setState({
            count: x + 1,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        Counter -{" "}
                        {this.state.count}
                    </h1>
                </div>
                <button
                    onClick={() =>
                        this.increment()
                    }
                >
                    Click to increment
                </button>
            </div>
        );
    }
}

export default Counter;