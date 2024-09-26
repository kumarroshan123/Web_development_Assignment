// Car Constructor
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Customer Constructor
function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
}

// Allow customer to rent a car if available
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented ${car.make} ${car.model}`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

// Allow customer to return a car
Customer.prototype.returnCar = function (car) {
    car.isAvailable = true;
    this.rentedCars = this.rentedCars.filter((rentedCar) => rentedCar !== car);
    console.log(`${this.name} returned ${car.make} ${car.model}`);
};

// Premium Customer Constructor (inherits from Customer)
function PremiumCustomer(name, rentedCars = [], discountRate = 0.1) {
    Customer.call(this, name, rentedCars);  // Using call to inherit Customer's properties
    this.discountRate = discountRate;
}

// Inherit Customer methods
Object.setPrototypeOf(PremiumCustomer.prototype,Customer.prototype)

// Calculate rental price
function calculateRentalPrice(carType, days, customer) {
    let basePrice = 500;

    if (carType === "SUV") {
        basePrice = 800;
    } else if (carType === "Sedan") {
        basePrice = 600;
    }

    let totalPrice = basePrice * days;
    
    if (customer instanceof PremiumCustomer) {
        totalPrice *= (1 - customer.discountRate);
        console.log(`Premium customer discount applied. Final price: $${totalPrice}`);
    } else {
        console.log(`Regular price for ${days} days: $${totalPrice}`);
    }
    return totalPrice;
}

// Car maintenance function
function maintenance(car, delay) {
    car.isAvailable = false;
    console.log(`${car.make} ${car.model} is under maintenance for ${delay} ms`);
    
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demo of call, apply, and bind
function demoDiscount(carType, days) {
    console.log(`Calculating price for ${this.name}...`);
    calculateRentalPrice.apply(this, [carType, days, this]);  // Using apply for variable arguments
}

// Creating Car objects
let car1 = new Car('Toyota', 'Camry', 2021);
let car2 = new Car('Honda', 'Civic', 2020);
let car3 = new Car('Ford', 'Explorer', 2019);

// Creating Regular and Premium Customers
let regularCustomer = new Customer('John');
let premiumCustomer = new PremiumCustomer('Jane');

// Renting and Returning Cars
regularCustomer.rentCar(car1);    // John rents Toyota Camry
premiumCustomer.rentCar(car2);    // Jane rents Honda Civic
regularCustomer.returnCar(car1);  // John returns Toyota Camry

// Applying Maintenance
maintenance(car3, 3000);  // Ford Explorer under maintenance for 3 seconds

// Using call, apply, and bind for price calculations
demoDiscount.call(regularCustomer, "SUV", 5);  // Using call for regular customer
demoDiscount.apply(premiumCustomer, ["Sedan", 3]);  // Using apply for premium customer

// Bind example for future discount calculation
let premiumDiscount = demoDiscount.bind(premiumCustomer, "SUV", 7);
premiumDiscount();  // Using bind to calculate the discount for Jane (premium customer)
