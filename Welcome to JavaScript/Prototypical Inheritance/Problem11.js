// Base Product Constructor
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Common method for all products
Product.prototype.getDetails = function () {
    return `${this.name}: $${this.price}, Quantity: ${this.quantity}`;
};

// Specialized Electronics Constructor
function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.brand = brand;
    this.model = model;
}

Object.setPrototypeOf(Electronics.prototype,Product.prototype);

Electronics.prototype.TurnOn=function(){
    console.log(`${this.name} by ${this.brand} is powered on.`);
}
Electronics.prototype.TurnOff=function(){
    console.log(`${this.name} by ${this.brand} is powered off.`);
}

// Specialized Clothing Constructor
function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.size = size;
    this.material = material;
}

Object.setPrototypeOf(Clothing.prototype,Product.prototype);

Clothing.prototype.tryOn = function () {
    console.log(`Trying on ${this.name} of size ${this.size} made of ${this.material}.`);
};

// Specialized Books Constructor
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.author = author;
    this.genre = genre;
}

Object.setPrototypeOf(Book.prototype,Product.prototype);

// Book-specific methods
Book.prototype.read = function () {
    console.log(`Reading "${this.name}" by ${this.author}. Genre: ${this.genre}.`);
};

// Create instances of each specialized product
let laptop = new Electronics('Laptop', 1200, 5, 'Dell', 'XPS 13');
let tshirt = new Clothing('T-shirt', 25, 100, 'L', 'Cotton');
let novel = new Book('1984', 15, 50, 'George Orwell', 'Dystopian Fiction');

// Access common methods
console.log(laptop.getDetails()); // Output: Laptop: $1200, Quantity: 5
console.log(tshirt.getDetails()); // Output: T-shirt: $25, Quantity: 100
console.log(novel.getDetails());  // Output: 1984: $15, Quantity: 50

// Access category-specific methods
laptop.TurnOn(); // Output: Laptop by Dell is powered on.
laptop.TurnOff(); // Output: Laptop by Dell is powered off.

tshirt.tryOn(); // Output: Trying on T-shirt of size L made of Cotton.

novel.read(); // Output: Reading "1984" by George Orwell. Genre: Dystopian Fiction.