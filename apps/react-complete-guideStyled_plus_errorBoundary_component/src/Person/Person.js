import React from "react";

import classes from "./Person.css";

const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error("Something went wrong..");
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="test" onChange={props.change} value={props.name} />
    </div>
  );
};

// export default Radium(person);
export default person;
