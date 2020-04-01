import React from 'react';

const UserInput = props => {
  const style = {
    background: 'red',
    width: '30vw',
    padding: '1rem',
    margin: '1rem',
    display: 'block',
    margin: 'auto'
  };
  return (
    <div style={style}>
      <input type="text" value={props.value} onChange={props.change}></input>
    </div>
  );
};

export default UserInput;
