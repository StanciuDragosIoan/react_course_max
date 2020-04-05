import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };
  render() {
    //if error return error msg
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;

      //else return all the elements wrapped inside ErrorBoundary components (these are this.props.children)
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
