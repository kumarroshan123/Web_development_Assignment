function createPerson(name,age){
    return {
    introduce(){
        return `Hi, I'm ${name} and I'm ${ age } years old.`
    }
 }
}

let person = createPerson("Kumar Roshan",21);
console.log(person.introduce());
