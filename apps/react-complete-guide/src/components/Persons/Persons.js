import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps()");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps()", props);
  // }

  // componentWillUpdate() removed

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate()");
  //   //chek if component is changing
  //   if (
  //       nextProps.persons !== this.props.persons || 
  //       nextProps.changed !== this.props.changed || 
  //       nextProps.clicked !==  this.props.clicked
  //     ) {
  //       //something changed
  //     return true; //if react should continue update(or false)
  //   }
  //   return false;
  // }

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
