/*
    styled components return a react component

    they have methods for all html elements (div, h1, etc..) and each method
    returns a react component

    syntax = style.div`` (pass stuff to render or styles between the ``)
*/

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: '#000';
  
`;
