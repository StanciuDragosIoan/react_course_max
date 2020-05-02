/*
    useState() takes in the initial state object as param

    useState() returns an array with 2 elements (the current state and 
    a function that allows us to update the state so that React knows it and
    re-renders the component)

    the function that updates the state actually creates a copy of it and replaces
    the old state with it (so we need to manually make sure we include all old state
    data when updating it)
        *or we could call useState() multiple times (manipulating multiple chunks of state)

    in a class based component state is a property and setState merges changes with
    the old state
*/
