//we can return adjacent elements in JSX without putting them in a parent div

//we can either use a react fragment


//or we can return an array 

class Person extends Component {
    render() {
      console.log("[Person.js] rendering...");
      return [
        // <div className={classes.Person}>
          <p key="i1" onClick={this.props.click}>
            I am a {this.props.name} and I am {this.props.age} years old!
          </p>,
          <p key="i2">{this.props.children}</p>,
          <input
            key="i3"
            type="test"
            onChange={this.props.change}
            value={this.props.name}
          />
        // </div>
      ];
    }
  }

  //note how we are returning an array and how the html elements are separated by comma



  //we can also have a wrapping component 