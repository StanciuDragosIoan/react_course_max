import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Validation from "./components/Validation";
import CharComponent from "./components/CharComponent";
class App extends Component {
  state = {
    charsArray: [],
  };

  inputCharsHandler = (e) => {
    let inputValue = e.target.value;
    document.querySelector("#output").innerText = inputValue;

    let newArray = [...inputValue];
    this.setState({
      charsArray: newArray,
    });
  };

  handleClick = (itemToLog, index) => {
    const initialAr = [...this.state.charsArray];

    let output = [];

    initialAr.forEach((item, index2) => {
      if (index2 !== index) {
        output.push(item);
      }
    });

    this.setState({
      charsArray: output,
    });

    document.querySelector("#output").innerText = output.join("");
  };
  render() {
    return (
      <div className="App">
        <h1>Assignment 2 (lists)</h1>

        <p>
          1.Create an input field (in App component) with a change listener
          which outputs the length of the entered text below (e.g. in a
          paragraph)
        </p>

        <p>
          2. Create a new component (=>Validation component) which receives the
          text length as prop
        </p>

        <p>
          3. Inside the validation Component either output 'Text too short' or
          'Text long enough' depending on the text length (e.g. min length = 5)
        </p>

        <p>
          4. Create another component (=>Char component) and style it as inline
          box (display:inline-block)
        </p>

        <p>
          5. Render a list of char components where each CharComponent receives
          a different letter of the entered text (the initial input field) as a
          prop
        </p>

        <p>
          6. When you click a char component, it should be removed from the
          entered text (2 way bind)
        </p>

        <InputField
          valueField={this.state.charsArray}
          inputChars={this.inputCharsHandler}
        />
        <Validation checkLength={this.state.charsArray} />

        {this.state.charsArray.map((item, index) => (
          <CharComponent
            clickHandler={() => this.handleClick(item, index)}
            value={item}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
