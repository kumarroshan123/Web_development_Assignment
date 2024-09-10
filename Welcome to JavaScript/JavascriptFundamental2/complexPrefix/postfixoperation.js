function complexOperation(a,b){
    console.log(++a);
    console.log(a);
    console.log(a++);
    console.log(a);
    console.log(b++);
    console.log(b);
    console.log(++b);
    console.log(b);
}

let a=10;
let b=5;
console.log(complexOperation(a,b));