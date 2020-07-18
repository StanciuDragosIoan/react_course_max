import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        {
          name: "Ted",
          age: 28,
        },

        {
          name: "Rosy",
          age: 27,
        },

        {
          name: "Kathy",
          age: 25,
        },
      ],
      name: "Some name..",
    },
  );

  const switchNameHandler = () => {
    console.log("Btn clicked and event triggered");
    setPersonsState({
      persons: [
        {
          name: "TEST_NAME",
          age: 28,
        },

        {
          name: "Rosy",
          age: 27,
        },

        {
          name: "Kathy",
          age: 25,
        },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
