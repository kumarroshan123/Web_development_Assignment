function Employee(name,position){
     this.name=name;
     this.position=position;
}

Employee.prototype.getdetails=function(){
    return `Name: ${this.name} and Position: ${this.position}`;
}

function Manager(name,position,teamsize){
    Employee.call(this,name,position);
    this.teamsize=teamsize;
}

Object.setPrototypeOf(Manager.prototype,Employee.prototype);
Manager.prototype.getdetails=function(){
    return `${Employee.prototype.getdetails.call(this)}, Team Size: ${this.teamsize}`;
}


function Developer(name,position,programminglanguage){
    Employee.call(this,name,position);
    this.programminglanguage=programminglanguage;
}

Object.setPrototypeOf(Developer.prototype,Employee.prototype);
Developer.prototype.getdetails=function(){
    return `${Employee.prototype.getdetails.call(this)}, Programming Language: ${this.programminglanguage}`;
}

const manager = new Manager("Alice", "Manager", 5);
const developer = new Developer("Bob", "Developer", "JavaScript");

console.log(manager.getdetails()); 
console.log(developer.getdetails())