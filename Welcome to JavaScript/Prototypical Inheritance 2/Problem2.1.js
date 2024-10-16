function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}`;
};

function ElectricVehicle(make, model, batteryCapacity) {
    Vehicle.call(this, make, model);
    this.batteryCapacity = batteryCapacity;
}

Object.setPrototypeOf(ElectricVehicle.prototype,Vehicle.prototype)
ElectricVehicle.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)} and Battery Capacity: ${this.batteryCapacity}`;
};

ElectricVehicle.compareBattery = function(ev1, ev2) {
    if (ev1.batteryCapacity > ev2.batteryCapacity) {
        return `${ev1.make} ${ev1.model} has a larger battery.`;
    } else if (ev1.batteryCapacity < ev2.batteryCapacity) {
        return `${ev2.make} ${ev2.model} has a larger battery.`;
    } else {
        return "Both vehicles have the same battery capacity.";
    }
};

const ev1 = new ElectricVehicle("Tesla", "Model S", 100);
const ev2 = new ElectricVehicle("Nissan", "Leaf", 40);

console.log(ev1.getDetails()); // Make: Tesla, Model: Model S, Battery Capacity: 100 kWh
console.log(ev2.getDetails()); // Make: Nissan, Model: Leaf, Battery Capacity: 40 kWh
console.log(ElectricVehicle.compareBattery(ev1, ev2)); // Tesla Model S has a larger battery.