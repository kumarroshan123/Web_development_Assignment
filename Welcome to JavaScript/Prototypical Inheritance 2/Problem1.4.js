const Person = {
    introduce: function() {
        return `Hello, my name is ${this.name}`;
    }
};
let athlete={};
Object.setPrototypeOf(athlete,Person);
athlete.playSport = function(sport) {
    console.log(`Playing ${sport}`);
};


athlete.introduce = function() {
    console.log(`${Person.introduce.call(this)} and I play ${this.sport}`);
};


athlete.name = "David";
athlete.sport = "Soccer";

athlete.introduce(); // Hello, my name is David and I play Soccer
athlete.playSport(athlete.sport); // Playing Soccer