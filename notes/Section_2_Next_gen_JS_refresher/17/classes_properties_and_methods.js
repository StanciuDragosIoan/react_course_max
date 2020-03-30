//ES 6 constructor to initialize obj properties

class Test {
  constructor(value) {
    this.value = value;
  }

  myMethod() {
    //code here
  }
}

//ES 7
class Test2 {
  valueProperty = 'value';

  myMethod = () => {
    //code here
  };
}

class Human {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = 'max';
  gender = 'female';

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();

person.printGender();
