import React from "react";

// function Greet() {
//     return <h1> Hello, world </h1>;
// }

// const Greet = () => {
//     return (
//         <div className="dummyClass">
//         {/* NOT class, but className */}
//             <h1> Hello, world </h1>
//         </div>
//     );
// };

const Greet = () => {
    return React.createElement(
        "div",
        { className: "dummyClass" },
        React.createElement(
            "h1",
            null,
            "Hello, world"
        )
    );
};

export default Greet;
