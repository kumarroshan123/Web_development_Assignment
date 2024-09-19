function describePerson(name,age=25){
    // let age1 = age || 25;
    return {name,age};
}

console.log(describePerson("Kumar Roshan",undefined));
