function checkRelational(a,b){
    if (a===b){
        return `${a} is equal to ${b}`;
    }else if (a>b){
        return `${a} is greater than ${b}`;
    }else{
        return `${a} is less than ${b}`;
    }
}

a=20
b=30
console.log(checkRelational(a,b));
