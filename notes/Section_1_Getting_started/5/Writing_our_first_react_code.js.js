/*  

// HTML 1
    <div id="p1"></div>
    <div id="p2"></div>


//React Snippet 1

function Person(props) {
  return(
  <div className="person">
  <h1>{props.name}</h1>
  <p>Your age: {props.age}</p>
</div>
  );
}

ReactDOM.render(<Person name="Max" age="28"/>, document.querySelector("#p1"));

ReactDOM.render(<Person name="Manu" age="29"/>, document.querySelector("#p2"));




####


// HTML 2
    <div id="app"></div>
 
//React Snippet 2

var app = (
    <div>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>
    </div>
);

ReactDOM.render(app, document.querySelector("#app"));

*/
