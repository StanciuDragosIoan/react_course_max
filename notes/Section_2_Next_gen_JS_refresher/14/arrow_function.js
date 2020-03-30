/*
    arrow function is shorter

    + introduces a lexical this 
    *no more issue this keyword

    this keyword in normal functions it can refer to the parent element

    inside an arrow function, this keyword will always keep its context
*/

function printMyName(name) {
  console.log(name);
}

const printMyName2 = name => {
  console.log(name);
};
// printMyName2('Max');

const multiply = number => number * 2;

multiply(2); //returns 4
