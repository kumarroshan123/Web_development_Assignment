function isEligible(age,hasPermission){
    if (age>=18 && hasPermission){
        return true;
    }
    else{
        return false;
    }
}

let age=21;
let hasPermission=false;
console.log(isEligible(age,hasPermission));