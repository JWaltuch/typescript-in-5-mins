class Student {
  name: string;
  constructor(
    public firstName: string,
    public middleInit: string,
    public lastName: string
  ) {
    this.name = firstName + ' ' + middleInit + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M', 'User');

document.body.textContent = greeter(user);
