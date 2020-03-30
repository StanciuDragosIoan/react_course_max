//declare children props in component:

import React from 'react';

const person = props => {
  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

//in App.js

<Person name="Manu" age="29">
  My hobbies: Racing
</Person>;
//note My hobbies: racing represents the children (props.children)

//children can also be another react component
