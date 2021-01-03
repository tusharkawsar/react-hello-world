import React from "react";
import Person from "components/Person";

function NameList() {
    const names = [1, 2, 3, 4];
    const nameList = names.map((name) => (
        <h2> {name} </h2>
    ));
    const persons = [
        { name: "Tushar", id: 1 },
        { name: "Mohona", id: 2 },
    ];
    const personList = persons.map((person) => (
        <Person key={person.id} person={person} />
    ));
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {/* {names.map((name) => (
                <h2> {name} </h2>
            ))} */}
            {/* {personList} */}
            {personList}
        </div>
    );
}

export default NameList;
