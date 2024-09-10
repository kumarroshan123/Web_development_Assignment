function evaluatecondition(a,b,c){
    if (a>=1 && b<0)
    {
        console.log("a is positive and b is negative");
    }
    if (b===0 || !Number.isInteger(c)){
        console.log("b is zero or c is not a number");
    }
    if (a!==c || c>10){
        console.log("a is not equal to c or c is greater than 10");
    }
}

let a=10;
let b=20;
let c='k';
evaluatecondition(a,b,c);