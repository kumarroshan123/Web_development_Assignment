function UpdatePerson(oldperson,newName){
    let {name,age} = oldperson;
    name=newName;
    return {name,age};
}

let person = UpdatePerson({ name: "Kumar Roshan", age: 21 },"Roshan");
console.log(person);
