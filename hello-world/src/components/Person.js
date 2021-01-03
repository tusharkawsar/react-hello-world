import React from "react";
// import nameList from "components/NameList";

function Person({ person }) {
    return (
        <div>
            <h2>I am {person.name}.</h2>
        </div>
    );
}

export default Person;
