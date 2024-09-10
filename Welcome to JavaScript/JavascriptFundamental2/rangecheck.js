function isInRange(val,min,max){
    if (val>=min && val<=max){
        return true;
    }else{
        return false;
    }
}

let val = 40;
let min = 20;
let max = 60;
console.log(isInRange(val,min,max))