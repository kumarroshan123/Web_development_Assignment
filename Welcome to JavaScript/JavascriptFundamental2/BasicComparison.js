function CompareNumbers(a,b){
    if (a===b){
        return `${a} is equal to ${b}`;
    }else if (a>b){
        return `${a} is greater than ${b}`;
    }else{
        return `${a} is less than ${b}`;
    }
}

a=20
b=20
console.log(CompareNumbers(a,b));