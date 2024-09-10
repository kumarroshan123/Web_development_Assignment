function logicaloperations(a,b){
    let a1 = a && b;
    let b1 = a || b;
    let c1 = !a;
    let d1 = !b ;
    return [a1,b1,c1,d1];
}

let a=true;
let b=false;
console.log(logicaloperations(a,b));
