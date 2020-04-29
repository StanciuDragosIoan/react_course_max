const num = 1; //primitive

const num2 = num; //real copy of num

//number, string, boolean  = primitive types (when you re-asign them, they get copied)

//array/obj reference type
const person = {
  name: 'Max'
};

const person2 = person;

person.name = 'manu'; //this line makes it that person2 name is also
//'manu' as there is only 1 object and we only copied the reference to it

console.log(person2); //person is stored in memory, in person 2 we only store a
//pointer to that var (we only copied a pointer)

//if we want to copy an actual object (not only the pointer to it) we use the spread operator

const book1 = {
  title: 'Gone with the wind'
};

//create new object and copy the properties of book1 in it through the spread operator
const book2 = {
  ...book1
};

 


book1.title = 'test';

console.log(book2); //title is not changed because we copied the actual object
