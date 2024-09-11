function complexExpression(a,b,c){
    if (typeof(a) && typeof(b) && typeof(c)){
        return [(a+b),(c*b)]
    }
}

let a= 10;
let b= 20;
let c= 30;
console.log(complexExpression(a,b,c));