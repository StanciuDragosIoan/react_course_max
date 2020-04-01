import React from 'react';
import './Output.css';

const UserOutput = props => {
  return (
    <div className="output">
      <p>Hello, my name is {props.username}, I am the first paragraph..</p>
      <p>Hello, my name is {props.username} , I am the second paragraph..</p>
    </div>
  );
};

export default UserOutput;
