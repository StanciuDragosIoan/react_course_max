import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
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
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
