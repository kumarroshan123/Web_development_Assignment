function updatePerson(person, updates) {
    return { ...person, ...updates };
}

let person = { name: "John", age: 30, city: "New York" };
let updates = { age: 31, city: "Los Angeles" };

let updatedPerson = updatePerson(person, updates);

console.log(updatedPerson);