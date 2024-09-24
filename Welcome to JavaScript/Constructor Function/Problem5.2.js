function AnimalCF(noOfLegs,vegetarian){
    this.noOfLegs=noOfLegs
    this.vegetarian=vegetarian
    this.eat=function(){
        return `eating...`;
    }
    this.greet=function(){
        return `Hi, i have ${this.noOfLegs} legs.`;
    }
}

let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.
