function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce=function (){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name,age,jobtitle){
    Person.call(this, name, age);
    this.jobtitle=jobtitle;
}

Object.setPrototypeOf(Employee.prototype,Person.prototype);

Employee.prototype.work=function (){
    console.log(`${this.name} is working as a ${this.jobtitle}`);
}


const person = new Person('John', 30);
const employee = new Employee('Jane', 28, 'Software Engineer');


person.introduce();  
employee.introduce(); 


employee.work();  
