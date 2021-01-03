import React from "react";

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>
                Call parent component
            </button>
        </div>
    );
}

export default ChildComponent;
