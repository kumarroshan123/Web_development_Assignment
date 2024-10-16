function Appliance(){}
Appliance.prototype.turnOn = function() {
    console.log("The appliance is now on");
};

function WashingMachine(){};
Object.setPrototypeOf(WashingMachine.prototype,Appliance.prototype)
WashingMachine.prototype.startWashing=function(){
    console.log("The washing machine is now washing clothes");
};

const washingMachine = new WashingMachine();

washingMachine.turnOn(); // The appliance is now on
washingMachine.startWashing(); // The washing machine is now washing clothes
