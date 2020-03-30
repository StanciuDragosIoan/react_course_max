/*
    we passed a method reference from App component (parent)

    to the Person (child) through props

    in App component we passed the prop 'click' which calls the switchNameHandler method

    <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
        >

    in the Person component we called the switchName handler by actually calling the 'click'
    prop

    methods can also be passed as props
*/
