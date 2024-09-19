function displayPerson(person){
    let {name,age}=person;
    return [name,age];
}

console.log(displayPerson({name:"Kumar Roshan",age:21,occupation:"Student"}));
