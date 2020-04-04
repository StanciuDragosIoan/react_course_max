import React from "react";

const CharComponent = (props) => {
  const style = {
    display: "inline-block",
    background: "#333",
    color: "#fff",
    border: "2px solid #000",
    padding: "1px",
    margin: "5px",
  };
  return (
    <div style={style} onClick={props.click}>
      {props.char}
    </div>
  );
};

export default CharComponent;
