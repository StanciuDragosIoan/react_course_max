/*
class Master {
  callAsMaster = () => console.log('master here..');
}

var master = new Master();
master.callAsMaster();

class Person extends Master {
  name = 'Max';
  // gender = 'female';
  call = () => {
    console.log(`calling.. to ${this.name}`);
  };
}



const Max = new Person();
Max.sayGender();

*/

/*
class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); //must call super() to execute the parent's constructor and correctly initialize our Person object
    this.name = 'Max';
    this.gender = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();

person.printGender();
*/
