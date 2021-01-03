import React, { Component } from "react";

export class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    // Conditional rendering methods
    render() {
        // 1) if/else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Tushar</div>;
        // } else {
        //     return <div>Welcome Guest</div>;
        // }

        // 2) Conditional elements
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Tushar</div>;
        // } else {
        //     message = <div>Welcome Guest</div>;
        // }
        // return <div>{message}</div>;

        // 3) Ternary
        // return this.state.isLoggedIn === true ? (
        //     <div>Welcome Tushar</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // );

        // 4) Short circuit
        return (
            this.state.isLoggedIn && (
                <div>Welcome Tushar</div>
            )
        );
    }
}

export default UserGreeting;
