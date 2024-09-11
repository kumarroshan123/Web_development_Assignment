function convertandcompare(a,b){
     let a1= String(a);
     let a2= String(b);
     return a1===a2;
}

let a= 10;
let b= "10";
console.log(convertandcompare(a,b));