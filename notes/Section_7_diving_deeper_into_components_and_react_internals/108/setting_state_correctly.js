/*

setting sate correctly (only for class based components that use setState()

set state should not be called synchronously

this.state (when used for update) is not guaranteed to be the latest state 

e.g. if I call setState() synchronously in the same time in 2 points in my app, stuff might break

so state should be updated asynchronously:



*/

//synchronously (when state udpate does nto depend on previous state) (COULD BE BAD)
this.setState({
    persons: persons,
    changeCounter: this.state.changeCounter + 1
  }); 

//async state update (for when we depend upon previous state)  (ALWAYS GOOD)
this.setState((prevState, props) => {
    return {
      persons: persons,
      changeCounter: prevState.changeCounter + 1
    }
  });