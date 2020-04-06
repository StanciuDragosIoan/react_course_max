/*
    in order to not show the alert when the component (Cockpit) is destroyed,
    we used the following approach (put the setTimeout call in a variable and
    call clearTimeout on the variable when the component is destroyed - in the 
    cleanup call)
    
*/

import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect()");
    //http request
    const timer = setTimeout(() => {
      alert("Saved data to  cloud");
    }, 1000);
    //pass another callback function
    return () => {
      //cleanup
      clearTimer(timer);
      console.log("[Cockpit.js] cleanupWork with useEffect()");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect()");
    //pass another callback function
    return () => {
      console.log("[Cockpit.js] cleanupWork  in 2nd useEffect()");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
