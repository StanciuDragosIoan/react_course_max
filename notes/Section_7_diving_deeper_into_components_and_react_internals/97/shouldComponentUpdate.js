/*

    we worked in App.js

    currently the shouldComponentUpdate() call returns true (this means that whenever
    we update something in the App component, the method is called)

    Persons.js gets re-rendered when something changes in App.js (because Persons is a
    child of App.js)

        *e.g. even when we remove the Cockpit component, 

    modified shouldComponentUpdate() in Persons.js by adding an if (check line 34)

        if (nextProps.persons !== this.props.persons) {
            return true; //if react should continue update(or false)
        } else {
            return false;
        }

    this will prevent Persons.js from re-rendering if its props don't change

    !note this works because in App.js when I modify the persons array, I actually clone it
    otherwise the comparison in Persons.js would not work (as the references compared are actually
    pointers but we actually compare 2 different arrays)

 */

import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps()");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps()", props);
  // }

  // componentWillUpdate() removed

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate()");
    //chek if component is changing
    if (nextProps.persons !== this.props.persons) {
      return true; //if react should continue update(or false)
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevPops, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate()");
    return {
      message: "Snapshot",
    };
  }

  //  componentWillUpdate() removed

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate()");
    console.log({
      prevProps,
      prevState,
      snapshot,
    });
  }

  //cleanup before component is removed
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount()");
  }

  render() {
    console.log("[Persons.js] rendering...");
    //return code directly here
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
