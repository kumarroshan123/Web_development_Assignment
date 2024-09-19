function CalloptionalMethod(obj){
    let a=obj?.greet;
    return a?a():undefined;
}

console.log(CalloptionalMethod({
    name: "Alice",
    greet: function() {
        return "Hello, Alice!";
    }
}));

console.log(CalloptionalMethod({
    name: "Alice",
    
}));
