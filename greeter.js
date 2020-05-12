var Student = /** @class */ (function () {
    function Student(firstName, middleInit, lastName) {
        this.firstName = firstName;
        this.middleInit = middleInit;
        this.lastName = lastName;
        this.name = firstName + ' ' + middleInit + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Jane', 'M', 'User');
document.body.textContent = greeter(user);
