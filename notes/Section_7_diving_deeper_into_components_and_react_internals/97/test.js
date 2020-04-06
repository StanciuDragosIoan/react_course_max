const array1 = [1, 2, 3];

array2 = array1;
array3 = [...array1];

array2[0] = 3; //modifies array1
array3[1] = 3; //does not modify array1

// console.log(array);

obj1 = {
  prop1: "test",
  prop2: "test2",
};

obj2 = obj1;
obj3 = { ...obj1 };

obj2.prop1 = "test2";
obj2.prop3 = "test";

console.log(obj1);
