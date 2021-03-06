/*
 refs allow us to target and reuse specific elements
 
 they can be used with a constructor or directly with componentDidMount as per below
*/

import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
 

class Person extends Component {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
    <Aux>
        <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="test"
            // ref={(inputEl) => {
            //   this.inputElement = inputEl
            // }}
            ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
       </div>
      </Aux>
  );
   
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, classes.Person);
