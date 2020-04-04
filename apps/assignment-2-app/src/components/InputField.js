import React from "react";

const InputField = (props) => {
  return (
    <div>
      <input
        value={props.valueField.join("")}
        onChange={props.inputChars}
        type="text"
      />
      <p id="output"></p>
    </div>
  );
};

export default InputField;
