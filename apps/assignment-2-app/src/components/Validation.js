import React from "react";

const Validation = (props) => {
  const successMsg = "Text long enough";
  const errorMsg = "Text too short";
  return <div>{props.checkLength.length < 5 ? errorMsg : successMsg}</div>;
};

export default Validation;
