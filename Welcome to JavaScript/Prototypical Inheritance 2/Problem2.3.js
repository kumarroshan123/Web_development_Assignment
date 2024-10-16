function Employee(){}
Employee.prototype.calculateSalary=function(){
    return 50000;
};

function FullTimeEmployee(bonus) {
    this.bonus = bonus;
}

FullTimeEmployee.prototype = Object.create(Employee.prototype);
FullTimeEmployee.prototype.calculateSalary = function() {
    return Employee.prototype.calculateSalary.call(this) + this.bonus;
};


function PartTimeEmployee(hourlyRate, hoursWorked) {
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
}

PartTimeEmployee.prototype = Object.create(Employee.prototype);
PartTimeEmployee.prototype.calculateSalary = function() {
    return this.hourlyRate * this.hoursWorked;
};


const fullTime = new FullTimeEmployee(5000);
const partTime = new PartTimeEmployee(20, 100);

console.log(`Full-Time Employee Salary: ${fullTime.calculateSalary()}`); 
console.log(`Part-Time Employee Salary: ${partTime.calculateSalary()}`); 