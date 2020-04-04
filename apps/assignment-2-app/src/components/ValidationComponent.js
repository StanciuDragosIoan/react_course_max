import React from "react";

export default function ValidationComponent(props) {
  const successMsg = "Text long enough";
  const errorMsg = "Text too short";
  return (
    <div>
      <p>Validation Comp Here: {props.textLength}</p>
      <p>{props.textLength >= 5 ? successMsg : errorMsg}</p>
    </div>
  );
}
