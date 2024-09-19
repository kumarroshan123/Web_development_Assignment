function createPerson(obj1,obj2){
    return {...obj1,...obj2}
}

let person = createPerson({ name: "Kumar Roshan", age: 21 },{ occupation: "Student", country: "India" });
console.log(person);
