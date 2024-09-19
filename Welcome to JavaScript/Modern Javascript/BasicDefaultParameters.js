function greet(name="Guest"){
    let name1 = name || "Guest!";
    return `Hello, ${name}`
}

console.log(greet("Kumar Roshan"));
