function coerceInConditionals(value){
    if(value){
        console.log("truthy");
    }else{
        console.log("Falsy");
    }
}

let value= "Hi";
coerceInConditionals(value);