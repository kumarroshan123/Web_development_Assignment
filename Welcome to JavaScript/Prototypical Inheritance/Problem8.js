
function Animal(type){
    this.type=type;
}

Animal.prototype.sound= function(){
    console.log(`Animal sound`);
}

function Dog(){
    Animal.call(this,"dog");
}

Object.setPrototypeOf(Dog.prototype,Animal.prototype);

Dog.prototype.sound = function(){
    console.log(`Bark`);
}

let myDog = new Dog();
myDog.sound();
console.log(myDog.type);

