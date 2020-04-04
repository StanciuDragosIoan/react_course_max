import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input type="text" onChange={props.change} />
      <p id="output"></p>
    </div>
  );
};

export default InputField;
