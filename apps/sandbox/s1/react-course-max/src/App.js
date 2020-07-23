import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        {
          id: "dwqrfg",
          name: "Ted",
          age: 28,
        },

        {
          id: "dfdgfgd",
          name: "Rosy",
          age: 27,
        },

        {
          id: "ffhsve",
          name: "Kathy",
          age: 25,
        },
      ],
    },
  );

  const [otherState, setOtherState] = useState("Some name..");
  const [showState, setShowState] = useState(false);

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      //if the id of the current person is the 1 received
      return p.id === id;
    });

    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;

    //update the array

    //fetch all persons
    const persons = [...personsState.persons];
    //update specific person
    persons[personIndex] = person;

    setPersonsState({ persons });
  };

  const togglePersonsHandler = () => {
    showState === false ? setShowState(true) : setShowState(false);
  };

  const deletePersonHandler = (personIndex) => {
    const persons = personsState.persons.slice();
    // const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons });
  };

  const style = {
    backgroundColor: "red",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <button style={style} onClick={togglePersonsHandler}>
        Switch Names
      </button>
      {showState === true
        ? personsState.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            click={() => {
              deletePersonHandler(index);
            }}
            key={person.id}
            changed={(event) => {
              nameChangedHandler(event, person.id);
            }}
          />;
        })
        : null}
    </div>
  );
};

export default App;
