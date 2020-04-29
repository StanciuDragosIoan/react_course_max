//spread and rest operator


//spread (splits an array or object properties into sub-arrays or sub-objects)
const oldArray = [5, 6, 7, 8, 9];
const newArray = [...oldArray, 2, 3];
/*
const oldObj = {
  oldProp: 'test',
  oldProp2: 'test2',
  newProp: '2'
};

const newObj = {
  ...oldObj,
  newProp: '5' //note how this overwrites the newProp property in oldObj;
};
  console.log(newObj);
 */

/*
//rest operator (used to merge a list of function arguments into an array or object)
function sortArgs(...args) {
  console.log(args.sort());
}

sortArgs(2, 3, 1, -2, 7, -5);
*/

//SPREAD
/*
//array
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [numbers, 6, 7, 8]; // [ [ 1, 2, 3, 4, 5 ], 6, 7, 8 ]
const newNumbers2 = [...numbers, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(newNumbers2);

//objects
const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 22
};

console.log(newPerson);



//REST
const filter = (...args) => {
  //filters elements that are === 1
  console.log(args.filter(el => el === 1));
};

filter(1, 5, 1, 3, 2, -10, 22, -90);
*/