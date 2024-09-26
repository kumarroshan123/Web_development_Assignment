// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person prototype method
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

// Employee constructor
function Employee(name, age, jobtitle) {
    Person.call(this, name, age); // Call the Person constructor to initialize name and age
    this.jobtitle = jobtitle;
}

// Set Employee prototype to inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Set the constructor property back to Employee

// Employee prototype method
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobtitle}`);
}

// Create instances of Person and Employee
const person = new Person('John', 30);
const employee = new Employee('Jane', 28, 'Software Engineer');

// Call introduce on both instances
person.introduce();  // Output: Hi, my name is John and I am 30 years old.
employee.introduce(); // Output: Hi, my name is Jane and I am 28 years old.

// Call work on the employee instance
employee.work();  // Output: Jane is working as a Software Engineer.
