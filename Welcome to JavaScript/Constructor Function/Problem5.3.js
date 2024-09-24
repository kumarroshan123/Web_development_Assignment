class AnimalES6 {
  constructor(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function () {
      return `eating...`;
    };
    this.greet = function () {
      return `Hi, i have ${this.noOfLegs} legs.`;
    };
  }
}

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
