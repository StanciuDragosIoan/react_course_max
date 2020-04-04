import React from "react";

export default function CharComponent(props) {
  const style = {
    display: "inline-block",
    background: "#333",
    width: "1.5rem",
    margin: "1rem",
    border: "1px solid #000",
    color: "#fff",
    padding: "5px",
  };
  return (
    <div onClick={props.clickHandler} style={style}>
      {props.value}
    </div>
  );
}
