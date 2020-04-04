import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    charsArray: [],
    fieldValue: "",
  };

  changeValueHandler = (e) => {
    let input = e.target.value;
    document.querySelector("#output").innerHTML = input;

    const inputArray = [...input];
    // const inputToPutInState = inputArray.join();

    this.setState({
      charsArray: inputArray,
    });
  };

  // getInputValue = () => {
  //   let actualValue = this.state.charsArray.join();
  //   console.log(actualValue);
  // };

  removeChar = (key) => {
    const formInput = [...this.state.charsArray];
    formInput.splice(key, 1);

    let newValue = "";

    formInput.forEach((item) => {
      newValue += item;
    });
    console.log(newValue);

    this.setState({
      charsArray: formInput,
    });

    console.log(this.state);
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
          value={this.state.originalInputValue}
          change={this.changeValueHandler}
        />
        <ValidationComponent textLength={this.state.charsArray.length} />
        {this.state.charsArray.map((item, index) => (
          <CharComponent
            click={() => this.removeChar(index)}
            char={item}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default App;
