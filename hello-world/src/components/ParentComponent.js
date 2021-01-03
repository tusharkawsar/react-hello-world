import React, { Component } from "react";
import ChildComponent from "components/ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: "parent",
        };
    }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`);
    };

    render() {
        return (
            <div>
                <ChildComponent
                    greetHandler={
                        this.greetParent
                    }
                />
            </div>
        );
    }
}

export default ParentComponent;
