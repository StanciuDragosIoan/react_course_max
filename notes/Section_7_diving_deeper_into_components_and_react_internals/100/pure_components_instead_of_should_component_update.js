 
 //  instead of implementing manual checks for props update in a component as per below
 
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate()");
    //chek if component is changing
    if (
        nextProps.persons !== this.props.persons || 
        nextProps.changed !== this.props.changed || 
        nextProps.clicked !==  this.props.clicked
      ) {
        //something changed
      return true; //if react should continue update(or false)
    }
    return false;
  }


  //instead of that we can extend a PureComponent which by default checks all the props of the component and 
  //if none of them change at all, it does NOT re-render the component (and this is the default behaviour of a PureComponent)