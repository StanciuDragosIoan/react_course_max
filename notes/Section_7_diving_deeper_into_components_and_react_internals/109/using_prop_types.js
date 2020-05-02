/*

    npm i prop-types to be able to use proptypes

    import and use/set them
*/

import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
 

class Person extends Component {
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
