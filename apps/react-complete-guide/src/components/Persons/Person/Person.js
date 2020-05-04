import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";
 

class Person extends Component {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
    <Aux>
     
          {
            this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in !</p>
          
          }
    
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
