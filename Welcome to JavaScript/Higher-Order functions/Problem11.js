const numbers = [1, 2, 3, 4, 5, 7];

let obj = numbers.reduce((a,b)=>{
    if(b%2!=0){
        return a+(b*b)
    }
    else{
        return a;
    }
},0)

console.log(obj);
