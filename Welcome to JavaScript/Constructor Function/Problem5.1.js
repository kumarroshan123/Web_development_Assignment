function animal(noOfLegs,vegetarian){
    let obj={}
    obj.noOfLegs=noOfLegs
    obj.vegetarian=vegetarian
    obj.eat=function(){
        return `eating...`;
    }
    obj.greet=function(){
        return `Hi, i have ${obj.noOfLegs} legs.`;
    }
    return obj;
}

let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.
